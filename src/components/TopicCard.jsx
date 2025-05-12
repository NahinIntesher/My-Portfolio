import Link from "next/link";
import CustomButton from "./CustomButton";

export default function TopicCard({ topic }) {
  return (
    <div className="bg-gray-800 border border-gray-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-white   mb-2">
        {topic.title}
      </h2>
      <p className="text-white mb-4">{topic.description}</p>
      <CustomButton text="Read More" link={topic.href} />
    </div>
  );
}
