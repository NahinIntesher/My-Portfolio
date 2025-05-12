import React from "react";
import Link from "next/link";
function CustomButton({ text, link }) {
  return (
    <Link
      href={link}
      className="inline-block bg-[#4cbb99] text-white px-6 py-2 rounded-lg hover:bg-[#cbddaa] hover:text-black transition-all duration-300"
    >
      {text}
    </Link>
  );
}

export default CustomButton;
