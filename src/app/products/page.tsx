import Link from "next/link";

export default function ProductList() {
  const sampleProdId = 100;
  return (
    <>
      <h1>Product List</h1>
      <li>
        <Link href="/products/1">Product 1</Link>
      </li>
      <li>
        <Link href="/products/2">Product 2</Link>
      </li>
      <li>
        {/*Here the replace routes to the home page ("/") directly instead of "/products" */}
        <Link href="/products/3" replace>
          Product 3
        </Link>
      </li>
      <li>
        <Link href={`/products/${sampleProdId}`}>Product {sampleProdId}</Link>
      </li>
      <Link href="/">Back to home</Link>
    </>
  );
}
