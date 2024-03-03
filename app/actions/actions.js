'use server'

import { Client } from 'square'
import { randomUUID } from 'crypto'
import serverProducts from '@/public/products.json'

BigInt.prototype.toJSON = function () {
  return this.toString()
}

const { paymentsApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: 'sandbox'
})

export async function submitPayment(sourceId, product) {
  try {
    const serverProduct = serverProducts.list.find(
      (serverProduct) => serverProduct.id === product.id
    )
    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId,
      amountMoney: {
        currency: 'USD',
        amount: serverProduct.price
      }
    })
    return result
  } catch (error) {
    console.log(error)
  }
}
