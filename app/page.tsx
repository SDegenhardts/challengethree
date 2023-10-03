import Portrait from './components/portrait'
import Comanager from './components/comanager'

export default function Home() {
  return (
    <main className='bg-[url("/campo.jpg")] bg-cover p-5 flex items-center flex-col'>
      <Comanager/>
      <Portrait/>
    </main>
  )
}