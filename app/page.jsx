import { CardList } from './components/card-list/card-list'

export default function Home() {
  return (
    <main className='text-center'>
      <h1 className='pt-10 text-4xl'>Products list</h1>
      <CardList />
    </main>
  )
}
