'use client'

import products from '@/public/products.json'
import SquareProvider from '../components/square-provider/square-provider'

export default function Checkout({ params }) {
  const product = products.list.find((product) => product.id === params.id)

  if (product) {
    return (
      <main className='text-center' style={{ height: '90vh' }}>
        <h1 className='pt-6 text-4xl'>{product.name}</h1>
        <h2 className='pt-8 text-xl'>Price: $ {product.price}</h2>
        <SquareProvider product={product} />
      </main>
    )
  }
}
