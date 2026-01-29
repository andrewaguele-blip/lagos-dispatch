'use client'
import { useState } from 'react'

export default function Home() {
  const [distance, setDistance] = useState(0)
  const price = 1500 + distance * 500

  return (
    <main>
      <header style={{ padding: 30, background: '#0f9d58', color: '#fff' }}>
        <h1>Lagos Dispatch Services</h1>
        <p>Fast & Reliable Dispatch Across Lagos Mainland and Island</p>
      </header>

      <section style={{ padding: 30 }}>
        <h2>Book a Dispatch</h2>
        <input placeholder="Pickup Location" style={{ width: '100%', padding: 10, marginBottom: 10 }} />
        <input placeholder="Drop-off Location" style={{ width: '100%', padding: 10, marginBottom: 10 }} />
        <input
          type="number"
          placeholder="Distance (KM)"
          onChange={e => setDistance(Number(e.target.value))}
          style={{ width: '100%', padding: 10, marginBottom: 10 }}
        />
        <strong>Estimated Price: ₦{price.toLocaleString()}</strong>
        <br /><br />
        <button style={{ padding: '12px 20px', background: '#0f9d58', color: '#fff', border: 'none' }}>
          Proceed to Payment
        </button>
      </section>

      <section style={{ padding: 30, background: '#f5f5f5' }}>
        <h2>Become a Rider</h2>
        <input placeholder="Full Name" style={{ width: '100%', padding: 10, marginBottom: 10 }} />
        <input placeholder="Phone Number" style={{ width: '100%', padding: 10, marginBottom: 10 }} />
        <input placeholder="Motorbike Registration Number" style={{ width: '100%', padding: 10, marginBottom: 10 }} />
        <button style={{ padding: '12px 20px', background: '#333', color: '#fff', border: 'none' }}>
          Apply Now
        </button>
      </section>

      <footer style={{ padding: 20, background: '#111', color: '#fff', textAlign: 'center' }}>
        © {new Date().getFullYear()} Lagos Dispatch Services
      </footer>
    </main>
  )
}
