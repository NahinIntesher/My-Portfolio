"use client";
import Link from "next/link";
import { useState } from "react";
import { Search, ArrowUpRight, X } from "lucide-react";
import { projectDetails } from "@/lib/details";
export default function ProjectExplorer() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const visible = projectDetails.filter(
    (p) =>
      (filter === "All" || p.category === filter) &&
      `${p.name} ${p.description} ${p.technologies.join(" ")}`
        .toLowerCase()
        .includes(query.toLowerCase().trim()),
  );
  return (
    <>
      <div className="project-toolbar">
        <div className="filter-tabs" role="group" aria-label="Filter projects">
          {["All", "Research", "Academic", "Personal"].map((c) => (
            <button
              key={c}
              aria-pressed={filter === c}
              className={filter === c ? "selected" : ""}
              onClick={() => setFilter(c)}
            >
              {c}
              <span>
                {c === "All"
                  ? projectDetails.length
                  : projectDetails.filter((p) => p.category === c).length}
              </span>
            </button>
          ))}
        </div>
        <label className="project-search">
          <Search size={18} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects or technologies"
            aria-label="Search projects"
          />
          {query && (
            <button aria-label="Clear search" onClick={() => setQuery("")}>
              <X size={16} />
            </button>
          )}
        </label>
      </div>
      <p className="results-note" role="status">
        {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>
      <div className="project-grid">
        {visible.map((p) => (
          <Link
            href={`/projects/${p.slug}`}
            className="project-card project-card-link"
            key={p.slug}
          >
            <div className="cover-wrap">
              <img
                src={p.cover}
                alt={`${p.name} interface concept`}
                width={1000}
                height={600}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="project-body">
              <h2>{p.name}</h2>
              <p>{p.subtitle}</p>
              <span className="card-detail-link">
                View project <ArrowUpRight size={18} />
              </span>
            </div>
          </Link>
        ))}
      </div>
      {!visible.length && (
        <div className="empty-results">
          <h2>No matching projects</h2>
          <p>Try a different name or technology.</p>
          <button
            className="btn btn-ghost"
            onClick={() => {
              setQuery("");
              setFilter("All");
            }}
          >
            Reset filters
          </button>
        </div>
      )}
    </>
  );
}
