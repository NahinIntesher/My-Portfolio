"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faLinkedin,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";

const SocialButton = ({ href, icon, label, bgColor }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5, scale: 1.03 }}
    className={`flex items-center justify-center ${bgColor} text-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg`}
  >
    <FontAwesomeIcon icon={icon} className="w-5 h-5 mr-3" />
    <span className="whitespace-nowrap">{label}</span>
  </motion.a>
);

const ContactInfoCard = ({ icon, title, value, href }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="flex items-start gap-4 p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-700"
  >
    <div className="text-emerald-400 text-2xl mt-1">
      <FontAwesomeIcon icon={icon} />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
      {href ? (
        <a
          href={href}
          className="text-gray-300 hover:text-emerald-400 transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-gray-300">{value}</p>
      )}
    </div>
  </motion.div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    message: "",
    isError: false,
    isSubmitted: false,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: "Please fill out all required fields",
        isError: true,
        isSubmitted: false,
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        message: "Please enter a valid email address",
        isError: true,
        isSubmitted: false,
      });
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/myzpdezj", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({
          message: "Your message has been sent successfully!",
          isError: false,
          isSubmitted: true,
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          setFormStatus({
            message: "",
            isError: false,
            isSubmitted: false,
          });
        }, 5000);
      } else {
        throw new Error("Submission failed.");
      }
    } catch (err) {
      setFormStatus({
        message: "Something went wrong. Please try again later.",
        isError: true,
        isSubmitted: false,
      });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-100">
            Get In <span className="text-emerald-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-100">
              Send Me a Message
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Your Name <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-gray-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email Address <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-gray-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-gray-500"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Message <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-gray-500"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              {formStatus.message && (
                <div
                  className={`p-4 rounded-lg ${
                    formStatus.isError
                      ? "bg-red-900 text-red-200"
                      : "bg-green-900 text-green-200"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 mb-8"
            >
              <ContactInfoCard
                icon={faEnvelope}
                title="Email"
                value="nahinsikdar123@gmail.com"
                href="mailto:nahinsikdar123@gmail.com"
              />
              <ContactInfoCard
                icon={faPhone}
                title="Phone"
                value="01815-808291"
              />
              <ContactInfoCard
                icon={faMapMarkerAlt}
                title="Location"
                value="Dhaka, Bangladesh"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-800 p-8 rounded-xl text-white border border-gray-700 shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <p className="mb-6 text-gray-300">
                I'm active on these platforms. Feel free to reach out through
                any of them.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SocialButton
                  href="https://github.com/nahinintesher"
                  icon={faGithub}
                  label="GitHub"
                  bgColor="bg-gray-700  hover:text-white"
                />
                <SocialButton
                  href="https://www.linkedin.com/in/nahinintesher"
                  icon={faLinkedin}
                  label="LinkedIn"
                  bgColor="bg-blue-800  hover:text-white"
                />
                <SocialButton
                  href="https://www.facebook.com/nahinnintesher"
                  icon={faFacebook}
                  label="Facebook"
                  bgColor="bg-indigo-800  hover:text-white"
                />
                <SocialButton
                  href="mailto:nahinsikdar123@gmail.com"
                  icon={faEnvelope}
                  label="Email"
                  bgColor="bg-emerald-700 hover:text-white"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-100">
                Availability
              </h3>
              <p className="text-gray-300 mb-4">
                I'm currently available for freelance projects and full-time
                opportunities.
              </p>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-300">Available</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
