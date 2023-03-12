import { useState } from 'react'
import SearchBar from './SearchBar'
import Gallery from './Gallery'

export default function App() {
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('Search for Music!!!')
  const [data, setData] = useState({})

  return <main>
    <SearchBar setSearch={setSearch} />
    <p>{message}</p>
    <Gallery />
  </main>
}
