import products from '@/public/products.json'
import { Card } from '../card/card'

export const CardList = () => {
  return (
    <section
      id='card-list'
      className='mt-20 gap-10 flex flex-wrap justify-center items-center text-center'
    >
      {products.list.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </section>
  )
}
