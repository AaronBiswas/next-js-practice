"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Page() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Order button clicked");
        router.push('/');
    }
  return (
    <div>
        <div>
            <h1>Order Product Page</h1>
            <button onClick={handleClick}>Order Now</button>
        </div>
    </div>
  )
}
