export const metadata = {
  title: 'Lagos Dispatch Services',
  description: 'Fast dispatch services across Lagos Mainland and Island',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
