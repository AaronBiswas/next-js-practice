import { Metadata } from "next";
import React from "react";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  return {
    title: `Product ${id}`,
  };
};

export default async function ProductDetails({ params }: Props) {
  const { productId } = await params;
  return (
    <div>
      <h1>Product details {productId}</h1>
    </div>
  );
}
