import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Lagos Dispatch Services',
  description:
    'Learn more about Lagos Dispatch Services, a professional dispatch and logistics company in Lagos.',
}

export default function AboutPage() {
  return (
    <main>
      <h1>About Lagos Dispatch Services</h1>
      <p>
        Lagos Dispatch Services is a professional dispatch and logistics company
        based in Lagos, Nigeria.
      </p>
    </main>
  )
}