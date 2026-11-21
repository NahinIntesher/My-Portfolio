"use client";
import { useContent } from "@/components/ContentProvider";

import { useState, type FormEvent } from "react";
import { Send, LoaderCircle, Check } from "lucide-react";


/* TODO: apnar Formspree form, submissions apnar dashboard + email e jabe */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/myzpdezj";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const { profile } = useContent();
  const [state, setState] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    /* currentTarget async gap-er pore null hoye jay, tai age capture */
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();
    const gotcha = String(data.get("_gotcha") || "");

    /* Honeypot: bot hole sekhan fill kore. Kichhu pathai na,
       user-er kachhe "success" dekhai. */
    if (gotcha) {
      form.reset();
      setState("success");
      setFeedback("Your message has been sent successfully.");
      window.setTimeout(() => {
        setState("idle");
        setFeedback(null);
      }, 6000);
      return;
    }

    if (!name || !email || !message) {
      setState("error");
      setFeedback("Please fill in your name, email, and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState("error");
      setFeedback("Please enter a valid email address.");
      return;
    }

    setState("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject: subject || undefined,
          message,
          _subject: `Portfolio contact, ${subject || name}`, // inbox-e ei subject-e ashbe
          _replyto: email, // "Reply" chaplei user-er kachhe jabe
        }),
      });

      if (res.ok) {
        setState("success");
        setFeedback(
          "Your message has been sent successfully. I usually respond within 48 hours.",
        );
        form.reset();
        window.setTimeout(() => {
          setState("idle");
          setFeedback(null);
        }, 6000);
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setState("error");
      setFeedback(
        `Something went wrong, please try again, or email me directly at ${profile.email}.`,
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <p className="form-title">Direct Message</p>

      {/* Spam trap, screen reader ba user kono bhabe dekhbe na */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="field">
        <label htmlFor="cf-name">Full name</label>
        <input
          id="cf-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your full name"
          required
        />
      </div>
      <div className="field">
        <label htmlFor="cf-email">Email</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@university.edu"
          required
        />
      </div>
      <div className="field">
        <label htmlFor="cf-subject">
          Subject <span className="sr-only">(optional)</span>
        </label>
        <input
          id="cf-subject"
          name="subject"
          type="text"
          placeholder="Lecturer application, research collaboration… (optional)"
        />
      </div>
      <div className="field">
        <label htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          name="message"
          placeholder="Briefly describe the opportunity, question, or collaboration you have in mind…"
          required
        />
      </div>

      <div className="form-foot">
        <button
          className="btn btn-solid"
          type="submit"
          disabled={state === "sending"}
        >
          {state === "sending" ? (
            <>
              Sending <LoaderCircle className="animate-spin" />
            </>
          ) : state === "success" ? (
            <>
              Sent <Check />
            </>
          ) : (
            <>
              Send Message <Send />
            </>
          )}
        </button>
        <p className="form-hint">
          Delivered straight to my inbox, no email client needed.
        </p>
      </div>

      {feedback ? (
        <p
          className={`form-status${state === "error" ? " is-error" : ""}`}
          role={state === "error" ? "alert" : "status"}
        >
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
