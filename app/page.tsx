import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BookingCard from '../components/BookingCard'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Lagos Dispatch Services | Fast & Reliable Dispatch in Lagos',
  description:
    'Lagos Dispatch Services offers fast, secure, and affordable dispatch delivery across Lagos Mainland and Island. Book reliable bike delivery today.',
  openGraph: {
    title: 'Lagos Dispatch Services',
    description:
      'Fast & reliable dispatch services across Lagos Mainland and Lagos Island.',
    type: 'website',
    locale: 'en_NG',
  },
}

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO (IMAGE + BRAND MESSAGE) */}
      <Hero />

      {/* BOOKING SPOTLIGHT */}
      <section
        style={{
          background:
            'linear-gradient(to bottom, #000000 0%, #ffffff 65%)',
          paddingBottom: 60,
        }}
      >
        <div id="book">
          <BookingCard />
        </div>
      </section>

      {/* TRUST STRIP */}
      <section
        style={{
          background: '#F4F4F4',
          padding: '28px 16px',
          display: 'flex',
          justifyContent: 'center',
          gap: 48,
          flexWrap: 'wrap',
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        <span>⚡ Fast Delivery</span>
        <span>🔒 Secure Service</span>
        <span>🏍️ Verified Riders</span>
      </section>

      {/* ABOUT (SEO SECTION) */}
      <section style={{ padding: '80px 20px', maxWidth: 1000, margin: '0 auto' }}>
        <h1>Fast & Reliable Dispatch Services in Lagos</h1>
        <p>
          Lagos Dispatch Services is a professional dispatch and logistics company
          providing fast, secure, and affordable bike delivery across Lagos
          Mainland and Lagos Island.
        </p>

        <p>
          We specialize in same-day delivery, personal errands, corporate
          logistics, and doorstep dispatch services designed to beat Lagos
          traffic and deliver on time.
        </p>
      </section>

      {/* SERVICES */}
      <section
        style={{
          padding: '80px 20px',
          background: '#F7F7F7',
        }}
      >
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2>Our Dispatch Services in Lagos</h2>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Way-Billing & Parcel Delivery</li>
            <li>Home & Office Delivery</li>
            <li>Personal Errands</li>
            <li>Pick-Up & Drop-Off Services</li>
            <li>Intra-City Bike Delivery</li>
            <li>Corporate & Business Logistics</li>
            <li>Food & Drug Delivery</li>
          </ul>
        </div>
      </section>

      {/* AREAS SERVED */}
      <section style={{ padding: '80px 20px', maxWidth: 1000, margin: '0 auto' }}>
        <h2>Areas We Serve in Lagos</h2>
        <p>
          Ikeja, Yaba, Surulere, Gbagada, Ogba, Ojodu, Ketu, Ikorodu Road, Lekki,
          Victoria Island, Ikoyi, Ajah, Chevron, and surrounding areas.
        </p>
      </section>

      {/* RIDERS */}
      <section
        id="riders"
        style={{
          padding: '80px 20px',
          background: '#111111',
          color: '#ffffff',
          textAlign: 'center',
        }}
      >
        <h2>Become a Dispatch Rider</h2>
        <p style={{ maxWidth: 600, margin: '0 auto' }}>
          Join Lagos Dispatch Services and earn consistently delivering across
          Lagos. Hire-purchase opportunities available.
        </p>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 20px', maxWidth: 1000, margin: '0 auto' }}>
        <h2>Frequently Asked Questions</h2>

        <h3>Do you offer same-day delivery in Lagos?</h3>
        <p>Yes, we offer same-day delivery across Lagos Mainland and Island.</p>

        <h3>Do you deliver to Lagos Island?</h3>
        <p>Yes, including Victoria Island, Ikoyi, Lekki, and Ajah.</p>

        <h3>How much does delivery cost?</h3>
        <p>
          Delivery cost depends on distance and location. Island deliveries may
          cost more due to traffic and tolls.
        </p>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: '80px 20px',
          background: '#F7F7F7',
          textAlign: 'center',
        }}
      >
        <h2>Contact Lagos Dispatch Services</h2>
        <p>
          📞 0915 793 2420 <br />
          📍 Lagos, Nigeria
        </p>
      </section>

      <Footer />
    </>
  )
}


