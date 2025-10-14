import { notFound } from "next/navigation";
import React from "react";

export default async function ReviewDetails({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>
        Product details: Product ID: {productId} Review ID:{reviewId}
      </h1>
    </div>
  );
}
