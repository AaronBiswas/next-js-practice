import React from 'react'

export default async function Page() {
  await new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("Intentional Delay for loading.tsx")
    },3000)
  })
  return (
    <div>
        <h1>Blog Page</h1>
    </div>
  )
}
