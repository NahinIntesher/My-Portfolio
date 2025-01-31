import Link from "next/link";

export default function TopicCard({ topic }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-[#728156] mb-2">
        {topic.title}
      </h2>
      <p className="text-gray-700 mb-4">{topic.description}</p>
      <Link
        href={topic.href}
        className="inline-block bg-[#728156] text-white px-6 py-2 rounded-lg hover:bg-[#88976C] transition-all duration-300"
      >
        Read More
      </Link>
    </div>
  );
}
