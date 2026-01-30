export default function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 32px',
        background: '#ffffff',
        borderBottom: '1px solid #eee',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <strong style={{ fontSize: 20, color: '#0f9d58' }}>
        Lagos Dispatch
      </strong>

      <div style={{ display: 'flex', gap: 20 }}>
        <a href="#book" style={linkStyle}>Book</a>
        <a href="#riders" style={linkStyle}>Riders</a>
        <a href="#contact" style={linkStyle}>Contact</a>
      </div>
    </nav>
  )
}

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  fontWeight: 500,
}
