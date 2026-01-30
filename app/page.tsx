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

      {/* BOOK SECTION */}
      <div id="book">
        <BookingCard />
      </div>

      {/* RIDERS SECTION */}
      <section
        id="riders"
        style={{
          padding: '60px 20px',
          background: '#f7f7f7',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: 32, marginBottom: 10 }}>
          Become a Rider
        </h2>
        <p style={{ maxWidth: 600, margin: '0 auto', fontSize: 16 }}>
          Own your motorbike through our flexible hire-purchase program and earn
          weekly delivering across Lagos Mainland and Island.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        style={{
          padding: '60px 20px',
          background: '#ffffff',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: 32, marginBottom: 10 }}>
          Contact Us
        </h2>
        <p style={{ fontSize: 16 }}>
          📞 Phone: +234 XXX XXX XXXX <br />
          📧 Email: lagosdispatch@gmail.com <br />
          📍 Lagos, Nigeria
        </p>
      </section>

      <Footer />
    </>
  )
}
