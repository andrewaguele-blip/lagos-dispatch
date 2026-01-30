'use client'

import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    google: any
  }
}

const BASE_FARE = 1500
const MAINLAND_RATE = 500
const ISLAND_RATE = 650

const ISLAND_KEYWORDS = [
  'lekki',
  'victoria island',
  'ikoyi',
  'ajah',
  'oniru',
  'chevron',
  'eko atlantic',
]

export default function BookingCard() {
  const pickupRef = useRef<HTMLInputElement>(null)
  const dropoffRef = useRef<HTMLInputElement>(null)

  const [distanceKm, setDistanceKm] = useState<number | null>(null)
  const [isIsland, setIsIsland] = useState(false)
  const [price, setPrice] = useState<number | null>(null)

  // Load Google Maps script
  useEffect(() => {
    if (window.google) return

    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&libraries=places`
    script.async = true
    script.onload = initAutocomplete
    document.body.appendChild(script)
  }, [])

  const initAutocomplete = () => {
    if (!window.google) return

    new window.google.maps.places.Autocomplete(pickupRef.current)
    new window.google.maps.places.Autocomplete(dropoffRef.current)
  }

  const calculateRoute = async () => {
    if (!pickupRef.current?.value || !dropoffRef.current?.value) return

    const directionsService = new window.google.maps.DirectionsService()

    directionsService.route(
      {
        origin: pickupRef.current.value,
        destination: dropoffRef.current.value,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result: any, status: string) => {
        if (status !== 'OK') return

        const meters = result.routes[0].legs[0].distance.value
        const km = meters / 1000
        setDistanceKm(km)

        const combinedText =
          pickupRef.current!.value.toLowerCase() +
          ' ' +
          dropoffRef.current!.value.toLowerCase()

        const islandTrip = ISLAND_KEYWORDS.some(keyword =>
          combinedText.includes(keyword)
        )

        setIsIsland(islandTrip)

        const rate = islandTrip ? ISLAND_RATE : MAINLAND_RATE
        const total = BASE_FARE + km * rate

        setPrice(Math.round(total))
      }
    )
  }

  return (
    <div
      style={{
        maxWidth: 520,
        margin: '-80px auto 40px',
        background: '#ffffff',
        padding: 28,
        borderRadius: 14,
        boxShadow: '0 18px 40px rgba(0,0,0,0.12)',
      }}
    >
      <h2 style={{ marginBottom: 16 }}>Book a Dispatch</h2>

      <input
        ref={pickupRef}
        placeholder="Pickup location"
        style={inputStyle}
        onBlur={calculateRoute}
      />

      <input
        ref={dropoffRef}
        placeholder="Drop-off location"
        style={inputStyle}
        onBlur={calculateRoute}
      />

      {distanceKm && (
        <p style={{ marginTop: 10 }}>
          Distance: <strong>{distanceKm.toFixed(2)} km</strong>
        </p>
      )}

      {isIsland && (
        <p style={{ color: '#0B6E3E', fontWeight: 600 }}>
          Island pricing applied
        </p>
      )}

      {price && (
        <p style={{ fontSize: 20, marginTop: 10 }}>
          <strong>Total: ₦{price.toLocaleString()}</strong>
        </p>
      )}

      <button
        style={{
          width: '100%',
          marginTop: 20,
          padding: 14,
          background: '#0F9D58',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          fontSize: 16,
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Continue to Payment
      </button>
    </div>
  )
}

const inputStyle = {
  width: '100%',
  padding: 12,
  marginBottom: 12,
  borderRadius: 8,
  border: '1px solid #ddd',
}
