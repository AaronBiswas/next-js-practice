import React from "react";

export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  if (slug?.length == 2) {
    return (
      <div>
        <h1>
          View docs for feature {slug[0]} and concept {slug[1]}
        </h1>
      </div>
    );
  } else if (slug?.length == 1) {
    return <h1>Viewing docs for feature {slug[0]}</h1>;
  }

  return <div><h1>Base Docs Page</h1></div>;
}
