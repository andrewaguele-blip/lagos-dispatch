export default function Footer() {
  return (
    <footer style={{
      padding: 30,
      background: '#111',
      color: '#fff',
      textAlign: 'center'
    }}>
      © {new Date().getFullYear()} Lagos Dispatch Services
    </footer>
  )
}
