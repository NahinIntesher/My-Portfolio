import Link from "next/link";

export default function SingleBlog({ blog }) {
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-lg border border-[#728156] hover:shadow-xl transition-shadow duration-300">
      {/* Topic */}
      <h2 className="text-2xl font-semibold text-[#728156] mb-4">
        {blog.topic}
      </h2>

      {/* Why? */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-[#728156] mb-2">Why?</h3>
        <p className="text-gray-700">{blog.why}</p>
      </div>

      {/* Details */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-[#728156] mb-2">Details</h3>
        <p className="text-gray-700">{blog.details}</p>
      </div>

      {/* Links */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-[#728156] mb-2">Links</h3>
        <ul className="list-disc list-inside text-gray-700">
          {blog.links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#728156] hover:text-[#88976C] transition-all duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Time */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-[#728156] mb-2">Time</h3>
        <p className="text-gray-700">{blog.time}</p>
      </div>

      {/* How to do? */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-[#728156] mb-2">
          How to do?
        </h3>
        <p className="text-gray-700">{blog.howToDo}</p>
      </div>
    </div>
  );
}
