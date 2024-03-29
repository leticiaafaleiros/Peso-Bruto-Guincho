import Nav from '../components/Nav'
import Dashboard from './Dashboard'

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow rounded-lg mb-2 mr-2 mt-2 p-4">
        <Dashboard />
      </div>
    </div>
  )
}
