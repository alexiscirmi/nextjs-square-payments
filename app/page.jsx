import { CardList } from './components/card-list/card-list'

export default function Home() {
  return (
    <main className='text-center' style={{ height: '90vh' }}>
      <h1 className='pt-6 text-4xl'>Products list</h1>
      <CardList />
    </main>
  )
}
