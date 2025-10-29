import Link from "next/link";
import React from "react";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ articleid: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const { articleid } = await params;
  const { lang = "en" } = await searchParams;


  //For client component use this way
  // import { use } from "react";


  //   const { articleid } = use(await params);
  //   const { lang = "en" } = use(await searchParams);

  //In Layout.tsx only params are accessible not searchParams


  return (
    <div>
      <div>
        <h1>Article Page</h1>
        <h2>Article ID: {`${articleid}`}</h2>
        <p>Article {`${lang}`} Language</p>
      </div>
      <Link href={`/articles/${articleid}?lang=en`}>Read in English</Link>
      <Link href={`/articles/${articleid}?lang=es`}>Read in Spanish</Link>
      <Link href={`/articles/${articleid}?lang=fr`}>Read in French</Link>
    </div>
  );
}
