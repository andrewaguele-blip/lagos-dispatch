import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dispatch FAQ',
  description: 'Frequently asked questions about our dispatch services in Lagos.',
}

export default function FAQPage() {
  return (
    <main>
      <h1>Frequently Asked Questions</h1>
      <p>Answers to common dispatch questions.</p>
    </main>
  )
}