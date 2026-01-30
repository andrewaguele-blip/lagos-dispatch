'use client'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BookingCard from '../components/BookingCard'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* BOOKING SPOTLIGHT */}
      <section
        style={{
          background:
            'linear-gradient(to bottom, #0F9D58 0%, #ffffff 65%)',
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
          background: '#F4F6F8',
          padding: '28px 16px',
          display: 'flex',
          justifyContent: 'center',
          gap: 48,
          flexWrap: 'wrap',
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        <TrustItem icon="⚡" text="Fast Delivery" />
        <TrustItem icon="🔒" text="Secure Payments" />
        <TrustItem icon="🏍️" text="Verified Riders" />
      </section>

      {/* RIDERS */}
      <section
        id="riders"
        style={{
          padding: '80px 20px',
          background: '#F7F7F7',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: 36, marginBottom: 12 }}>
          Become a Rider
        </h2>

        <div
          style={{
            width: 70,
            height: 4,
            background: '#0F9D58',
            margin: '0 auto 24px',
            borderRadius: 2,
          }}
        />

        <p
          style={{
            maxWidth: 620,
            margin: '0 auto',
            fontSize: 16,
            lineHeight: 1.6,
          }}
        >
          Own your motorbike through our flexible hire-purchase program and earn
          weekly delivering across Lagos Mainland and Island.
        </p>

        <div
          style={{
            marginTop: 32,
            display: 'inline-block',
            padding: '14px 28px',
            background: '#111',
            color: '#fff',
            borderRadius: 8,
            fontWeight: 600,
          }}
        >
          Apply as a Rider
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: '80px 20px',
          background: '#ffffff',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: 32, marginBottom: 12 }}>
          Contact Us
        </h2>

        <div
          style={{
            width: 60,
            height: 3,
            background: '#0F9D58',
            margin: '0 auto 24px',
            borderRadius: 2,
          }}
        />

        <p style={{ fontSize: 16, lineHeight: 1.8 }}>
          📞 +234 915 793 2420 <br />
          📧 lagosdispatchservices@gmail.com <br />
          📍 Lagos, Nigeria
        </p>
      </section>

      <Footer />
    </>
  )
}

/* Small helper component */
function TrustItem({ icon, text }: { icon: string; text: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        transition: 'transform 0.2s ease',
      }}
      onMouseEnter={e =>
        (e.currentTarget.style.transform = 'translateY(-3px)')
      }
      onMouseLeave={e =>
        (e.currentTarget.style.transform = 'translateY(0)')
      }
    >
      <span style={{ fontSize: 18 }}>{icon}</span>
      <span>{text}</span>
    </div>
  )
}

