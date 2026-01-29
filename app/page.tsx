
'use client'
import React, { useState } from 'react'

export default function Page() {
  const [distance, setDistance] = useState(0)
  const price = 1500 + distance * 500

  return (
    <main style={{ padding: 20 }}>
      <h1>Lagos Dispatch Services</h1>
      <input placeholder="Pickup" />
      <input placeholder="Dropoff" />
      <input type="number" onChange={e=>setDistance(Number(e.target.value))} />
      <p>Price: ₦{price}</p>
      <button>Pay with Paystack</button>
    </main>
  )
}
