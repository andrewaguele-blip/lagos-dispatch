'use client'
import { useState } from 'react'

export default function BookingCard() {
  const [distance, setDistance] = useState(0)
  const price = 1500 + distance * 500

  return (
    <div style={{
      maxWidth: 500,
      margin: '-60px auto 40px',
      background: '#fff',
      padding: 24,
      borderRadius: 12,
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    }}>
      <h2>Book a Dispatch</h2>
      <input placeholder='Pickup location' style={{ width: '100%', padding: 12, marginBottom: 10 }} />
      <input placeholder='Drop-off location' style={{ width: '100%', padding: 12, marginBottom: 10 }} />
      <input type='number' placeholder='Distance (KM)'
        onChange={e => setDistance(Number(e.target.value))}
        style={{ width: '100%', padding: 12, marginBottom: 10 }} />
      <p><strong>Estimated Price:</strong> ₦{price.toLocaleString()}</p>
      <button style={{
        width: '100%',
        padding: 14,
        background: '#0f9d58',
        color: '#fff',
        border: 'none',
        borderRadius: 6,
        fontSize: 16
      }}>
        Continue
      </button>
    </div>
  )
}
