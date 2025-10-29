import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="flex flex-col gap-2">
        <Link href="/blog">Click for Blog page</Link>
        <Link href="/products">Click for Products page</Link>
        <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
        <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
      </div>
    </div>
  );
}
