"use client";

import { usePathname } from "next/navigation";
import React from "react";


//usePathName give the string of the url


export default function NotFound() {
  const pathName = usePathname();
  const reviewId = pathName.split("/")[2];
  const productId = pathName.split("/")[4];
  return (
    <div>
      <h1>
        Review {reviewId} not found for ProductId {productId}
      </h1>
      <p>Review limit Reached</p>
    </div>
  );
}
