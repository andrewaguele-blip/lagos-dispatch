export default function Hero() {
  return (
    <section
      style={{
        padding: '100px 32px 160px',
        background: `
          linear-gradient(
            rgba(0,0,0,0.75),
            rgba(0,0,0,0.75)
          ),
          url('/hero-rider.jpg')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#ffffff',
      }}
    >
      <h1
        style={{
          fontSize: 54,
          maxWidth: 720,
          lineHeight: 1.1,
          marginBottom: 16,
        }}
      >
        You Order,
        <br />
        <span style={{ color: '#C4161C' }}>We Deliver</span>
      </h1>

      <div
        style={{
          width: 70,
          height: 4,
          background: '#C4161C',
          marginBottom: 24,
          borderRadius: 2,
        }}
      />

      <p
        style={{
          fontSize: 18,
          maxWidth: 600,
          lineHeight: 1.6,
          opacity: 0.95,
        }}
      >
        Fast, reliable doorstep delivery anywhere within Lagos.
      </p>
    </section>
  )
}





