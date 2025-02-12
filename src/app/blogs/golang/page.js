import { BlogsAboutGOLang } from "@/components/BlogsAboutGOLang"; // Adjust the import path as needed
import SingleBlog from "@/components/SingleBlog"; // Adjust the import path as needed

export default function GoLangPage() {
  return (
    <main className="min-h-screen p-8 bg-[#F4F4F4]">
      <h1 className="text-4xl font-bold text-center text-[#728156] mb-8">
        GoLang: A Modern Programming Language
      </h1>

      {/* Render Blog Posts in a Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {BlogsAboutGOLang.map((blog) => (
          <SingleBlog key={blog.id} blog={blog} />
        ))}
      </div>
    </main>
  );
}
