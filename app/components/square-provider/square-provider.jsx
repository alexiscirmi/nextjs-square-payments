'use client'

import { useState } from 'react'
import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk'
import { submitPayment } from '@/app/actions/actions'
import { PaymentStatus } from './payment-status/payment-status'
import Link from 'next/link'

export default function SquareProvider({ product }) {
  const appId = process.env.NEXT_PUBLIC_SQUARE_APP_ID
  const locationId = process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID

  const [paymentStatus, setPaymentStatus] = useState('idle')

  return (
    <section className='relative'>
      <div
        id='provider-container'
        className='mt-10 flex flex-col justify-center items-center gap-5 w-full'
      >
        <div className='min-h-48'>
          <PaymentForm
            applicationId={appId}
            locationId={locationId}
            cardTokenizeResponseReceived={async (token) => {
              const result = await submitPayment(token.token, product)
              console.log(result)
              setPaymentStatus(result)
            }}
          >
            <CreditCard />
          </PaymentForm>
        </div>
        <PaymentStatus paymentStatus={paymentStatus} />
      </div>

      <div
        id='links'
        className='pt-6 flex flex-col justify-center items-center gap-6 w-full'
      >
        <a
          href='https://developer.squareup.com/docs/devtools/sandbox/payments#web-and-mobile-client-testing'
          target='_blank'
          className='underline text-blue-900'
        >
          Sandbox credit card numbers
        </a>
        <Link
          href='/'
          className='bg-blue-950 text-white border border-blue-500 rounded-md flex justify-center items-center w-20 h-8 hover:scale-105 transition-all'
        >
          Home
        </Link>
      </div>
    </section>
  )
}
