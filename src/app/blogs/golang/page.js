import { BlogsAboutGOLang } from "@/components/BlogsAboutGOLang";
import SingleBlog from "@/components/SingleBlog";

import Link from "next/link";
export default function GoLangPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F4F4F4] to-[#E0E0E0] py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center mb-4">
            <Link
              href="/blogs"
              className="text-gray-500 hover:text-[#728156] transition-colors flex items-center text-sm"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Go Programming Language
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Articles and tutorials about Go's concurrency model, performance
            optimizations, and best practices.
          </p>
        </header>

        {/* Articles Grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BlogsAboutGOLang.map((blog) => (
              <SingleBlog
                key={blog.id}
                blog={blog}
                className="transform hover:-translate-y-1 transition-transform duration-300"
              />
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mt-20 bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated on GoLang
          </h3>
          <p className="text-gray-600 mb-6">
            Subscribe to receive new articles about Go programming directly to
            your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#728156]"
            />
            <button className="bg-[#728156] text-white px-6 py-2 rounded-lg hover:bg-[#5A6D41] transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
