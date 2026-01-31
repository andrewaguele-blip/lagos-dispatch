import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dispatch Services in Lagos',
  description:
    'Explore our dispatch services in Lagos including bike delivery and logistics.',
}

export default function ServicesPage() {
  return (
    <main>
      <h1>Our Dispatch Services</h1>
      <ul>
        <li>Bike Dispatch</li>
        <li>Same-day Delivery</li>
        <li>Corporate Logistics</li>
      </ul>
    </main>
  )
}