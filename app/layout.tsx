export const metadata = {
  title: 'Lagos Dispatch Services',
  description: 'Fast dispatch services across Lagos Mainland and Island',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
  style={{
    margin: 0,
    fontFamily: 'Inter, Arial, sans-serif',
    backgroundColor: '#ffffff',
    color: '#111111',
    scrollBehavior: 'smooth',
  }}
>
  {children}
</body>

    </html>
  )
}




