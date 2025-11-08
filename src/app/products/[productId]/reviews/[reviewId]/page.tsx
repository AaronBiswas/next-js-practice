import { redirect } from "next/navigation";
import React from "react";


function getRandomInt(count:number){
  return Math.floor(Math.random()*count)  //generates random number
}

export default async function ReviewDetails({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const random=getRandomInt(2)

  if(random==1){
    throw new Error("Error loading review")   //added to check error.tsx
  }

  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    // notFound();
    redirect("/products");
  }
  return (
    <div>
      <h1>
        Product details: Product ID: {productId} Review ID:{reviewId}
      </h1>
    </div>
  );
}
