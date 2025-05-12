import Link from "next/link";
import TopicCard from "@/components/TopicCard";
import { BlogTopics } from "@/components/BlogTopics";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1f1f1f] to-[#2e2e2e] text-gray-200 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4">
            Insights & Tutorials
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Explore my collection of technical articles, tutorials, and thoughts
            on modern software development.
          </p>
        </header>

        {/* Featured Topics */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-gray-100 mb-8 border-b pb-2 border-gray-700">
            Browse by Topic
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BlogTopics.map((topic) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                className="bg-[#333] hover:shadow-xl transition-shadow duration-300 text-white"
              />
            ))}
          </div>
        </section>

        {/* Latest Articles Section */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-8 border-b pb-2 border-gray-700">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-[#e7ffc6] bg-[#3a3a3a] rounded-full mb-3">
                  GoLang
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  Concurrency Patterns in Go
                </h3>
                <p className="mb-4">
                  Explore powerful concurrency models that make Go stand out
                  from other languages.
                </p>
                <Link
                  href="/blog/golang/concurrency-patterns"
                  className="text-[#7b8869] font-medium hover:text-[#d0e6a5] transition-colors flex items-center"
                >
                  Read Article
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
