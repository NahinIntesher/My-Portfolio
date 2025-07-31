import React from "react";
import Link from "next/link";
function CustomButtonTargetBlank({ text, link }) {
  return (
    <Link
      href={link}
      target="_blank"
      className="flex bg-emerald-700 text-center text-white px-2 py-1 sm:px-2 sm:py-1 rounded-lg hover:bg-emerald-600 hover:text-black transition-all duration-300"
    >
      {text}
    </Link>
  );
}

export default CustomButtonTargetBlank;
