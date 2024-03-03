import Link from 'next/link'

export const Card = ({ id, name, price }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 border-2 rounded-md border-blue-500 w-40 h-40'>
      <h2 className='text-2xl'>{name}</h2>
      <h3 className='text-xl'>$ {price}</h3>
      <Link
        href={`/${[id]}`}
        className='bg-blue-950 text-white w-4/5 border border-blue-500 rounded-md flex justify-center items-center  h-8 hover:scale-105 transition-all'
      >
        Buy
      </Link>
    </div>
  )
}
