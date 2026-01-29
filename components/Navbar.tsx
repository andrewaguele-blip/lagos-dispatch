export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 32px',
      background: '#ffffff',
      borderBottom: '1px solid #eee'
    }}>
      <strong style={{ fontSize: 20, color: '#0f9d58' }}>Lagos Dispatch</strong>
      <div style={{ display: 'flex', gap: 20 }}>
        <a href='#' style={{ textDecoration: 'none', color: '#333' }}>Book</a>
        <a href='#' style={{ textDecoration: 'none', color: '#333' }}>Riders</a>
        <a href='#' style={{ textDecoration: 'none', color: '#333' }}>Contact</a>
      </div>
    </nav>
  )
}
