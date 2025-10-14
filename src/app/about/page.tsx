import React from "react";

export const metadata = {
  title: { absolute: "About Me" }, //This overrides the metadata title of the root Layout metadata title
  description: "This is about page",
};

export default function Page() {
  return (
    <div>
      <h1>About me</h1>
    </div>
  );
}
