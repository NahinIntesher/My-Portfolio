import Link from "next/link";
import CustomButton from "./CustomButton";

export default function TopicCard({ topic }) {
  return (
    <div className="bg-white border border-[#728156] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-[#728156] mb-2">
        {topic.title}
      </h2>
      <p className="text-gray-700 mb-4">{topic.description}</p>
      <CustomButton text="Read More" link={topic.href} />
    </div>
  );
}
