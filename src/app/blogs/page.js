import Link from "next/link";
import TopicCard from "@/components/TopicCard";
import { BlogTopics } from "@/components/BlogTopics";

export default function BlogPage() {
  return (
    <main className="min-h-screen p-8 bg-[#E7F5DC]">
      <h1 className="text-4xl font-bold text-center text-[#728156] mb-8">
        Welcome to the Blog!
      </h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {BlogTopics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </main>
  );
}
