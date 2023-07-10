import Nav from '../components/Nav'
export default function Layout({ children }) {
  return (
    <div className="bg-black min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow rounded-lg mb-2 mr-2 mt-2 p-4">
        {children}
      </div>
    </div>
  )
}
