'use client'


import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BookingCard from '../components/BookingCard'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BookingCard />

      <section style={{ padding: 40, background: '#f7f7f7', textAlign: 'center' }}>
        <h2>Become a Rider</h2>
        <p>Own your bike through our hire-purchase program</p>
      </section>

      <Footer />
    </>
  )
}

