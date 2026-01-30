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
  }}
>
  <div
    style={{
      maxWidth: 1100,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      alignItems: 'center',
    }}
  >
    {/* IMAGE */}
    <img
      src="/rider-services.png"
      alt="Lagos Dispatch Rider"
      style={{
        width: '100%',
        borderRadius: 12,
      }}
    />

    {/* TEXT */}
    <div>
      <h2 style={{ fontSize: 36, marginBottom: 12 }}>
        Our Services
      </h2>

      <div
        style={{
          width: 60,
          height: 4,
          background: '#C4161C',
          marginBottom: 20,
          borderRadius: 2,
        }}
      />

      <ul style={{ fontSize: 16, lineHeight: 1.8 }}>
        <li>Way-billing</li>
        <li>Home Delivery</li>
        <li>Personal Errands</li>
        <li>Pick Up / Drop Off</li>
        <li>Intra-city Delivery</li>
        <li>Corporate Delivery</li>
        <li>Food / Drug Delivery</li>
      </ul>
    </div>
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

