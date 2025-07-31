import {
  Code2,
  BookOpen,
  Clock,
  ArrowRight,
  Bookmark,
  Zap,
} from "lucide-react";

export default function TopicCard({ topic, className = "" }) {
  return (
    <div className={`group relative ${className}`}>
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-emerald-400/20 to-emerald-600/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Main card */}
      <div className="relative bg-gray-800/95 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 group-hover:transform group-hover:scale-[1.02] group-hover:border-emerald-500/30">
        {/* Image container */}
        <div className="relative h-56 w-full ">
          {/* Image */}
          <img
            src={topic.image}
            alt={topic.title}
            className="w-full h-full object-cover  transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />

         

          {/* Floating badge */}
          <div className="absolute top-4 right-4">
            <div className="bg-emerald-800/20 backdrop-blur-md border border-emerald-400/30 rounded-2xl px-4 py-2">
              <span className="text-emerald-50 text-sm font-semibold flex items-center gap-2">
                <Zap className="w-3 h-3 animate-pulse" />
                Featured
              </span>
            </div>
          </div>

          {/* Bottom gradient for text readability */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>

        {/* Content container */}
        <div className="relative p-6 bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-sm">
          {/* Category tag */}
          <div className="mb-3">
            <span className="inline-flex items-center px-3 py-1.5 text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-xl backdrop-blur-sm">
              <Code2 className="w-3 h-3 mr-1.5" />
              Programming
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-100 transition-colors duration-300 leading-tight">
            {topic.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-6 line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
            {topic.description}
          </p>

          {/* Stats row */}
          <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                12 Articles
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />5 min read
              </span>
            </div>
            <div className="text-emerald-400 text-xs font-semibold">
              Updated recently
            </div>
          </div>

          {/* Action button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold group-hover:text-emerald-300 transition-all duration-300 group-hover:gap-3 cursor-pointer">
              <span>Explore Topics</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>

            {/* Bookmark icon */}
            <button className="p-2 text-gray-400 hover:text-emerald-400 transition-colors duration-300 hover:bg-emerald-500/10 rounded-xl">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Subtle animated border */}
        <div
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/0 via-emerald-400/20 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              "conic-gradient(from 0deg, transparent, rgba(16, 185, 129, 0.1), transparent, rgba(16, 185, 129, 0.1), transparent)",
            animation: "spin 6s linear infinite",
            maskImage:
              "linear-gradient(transparent, transparent, black, black, transparent, transparent)",
          }}
        >afsfsdf</div>
      </div>
    </div>
  );
}
