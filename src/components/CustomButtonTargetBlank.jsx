import React from "react";
import Link from "next/link";
function CustomButtonTargetBlank({ text, link }) {
  return (
    <Link
      href={link}
      target="_blank"
      className="inline-block bg-emerald-700 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 hover:text-black transition-all duration-300"
    >
      {text}
    </Link>
  );
}

export default CustomButtonTargetBlank;
