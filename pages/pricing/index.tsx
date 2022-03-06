import Link from 'next/link';
import {ReactNode} from 'react';
import { MainLayout } from '../../components/layouts/MainLayout';

export default function PricingPage() {
  return (
    <>
      <h1>You are now in Pricing</h1>
      <h1 className={'title'}>
        Go to <Link href="/">Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/pricing.js</code>
      </p>
    </>
  )
}

PricingPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}
