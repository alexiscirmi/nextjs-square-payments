'use client'

import { useState } from 'react'
import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk'
import { submitPayment } from '@/app/actions/actions'
import { PaymentStatus } from './payment-status/payment-status'

export default function SquareProvider({ product }) {
  const appId = process.env.NEXT_PUBLIC_SQUARE_APP_ID
  const locationId = process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID

  const [paymentStatus, setPaymentStatus] = useState('idle')

  return (
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
  )
}
