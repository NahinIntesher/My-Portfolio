import Link from "next/link";
import TopicCard from "@/components/TopicCard";
import { BlogTopics } from "../../components/BlogTopics";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-emerald-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-emerald-600/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Page Header */}
        <header className="text-center mb-20 relative z-10">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 mb-6">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl px-6 py-3">
              <span className="text-emerald-400 font-medium text-sm tracking-wider uppercase">
                Knowledge Hub
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-100 to-emerald-300 bg-clip-text text-transparent leading-tight">
            Insights & Tutorials
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mb-8 rounded-full"></div>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore my collection of technical articles, tutorials, and thoughts
            on modern software development. Dive deep into cutting-edge
            technologies and best practices.
          </p>
        </header>

        {/* Featured Topics */}
        <section className="mb-24 relative z-10">
          <div className="flex items-center mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            <h2 className="text-3xl font-bold text-white px-8 bg-gray-800/50 backdrop-blur-sm rounded-full py-3 border border-gray-700/50">
              Browse by Topic
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BlogTopics.map((topic, index) => (
              <div
                key={topic.id}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }} // fix: wrap in backticks
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-emerald-400/20 to-emerald-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Card container */}
                <div className="relative bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-emerald-500/30">
                  <TopicCard
                    topic={topic}
                    className="hover:shadow-2xl text-white border-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
