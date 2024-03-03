'use server'

import { Client } from 'square'
import { randomUUID } from 'crypto'

BigInt.prototype.toJSON = function () {
  return this.toString()
}

const { paymentsApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: 'sandbox'
})

export async function submitPayment(sourceId, product) {
  try {
    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId,
      amountMoney: {
        currency: 'USD',
        amount: product.price
      }
    })
    return result
  } catch (error) {
    console.log(error)
  }
}
