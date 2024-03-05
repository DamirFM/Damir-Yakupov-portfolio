import React from "react";

export default function Footer() {
  return (
    <footer className="absolute mb-15 inset-x-0 bottom-[2rem] px-4 text-center text-gray-500 dark:text-white/80">
      <small className="mb-2 block text-xs">
        &copy; 2024 Damir Yakupov
      </small>
      <p className="text-xs">
        <span className="font-semibold dark:text-white/80">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}