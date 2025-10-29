import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">Click for Blog page</Link>
      <Link href="/products">Click for Products page</Link>
    </div>
  );
}
