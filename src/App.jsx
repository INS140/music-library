import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import Gallery from './Gallery'

export default function App() {
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('Search for Music!!!')
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      if (search) {
        try {
          const res = await fetch(`https://itunes.apple.com/search?term=${search}`)
          const resData = await res.json()
          console.log(resData.results[0])
          if (resData.results.length > 0) {
            setData(resData.results)
            setMessage('Search for more Music!!!')
          } else {
            
          }
        } catch (err) {
          console.log(err)
          setMessage("Oopsie, that's not a valid search ...")
        }
      }
    }
    fetchData()
  }, [search])

  return <main>
    <SearchBar setSearch={setSearch} />
    <p>{message}</p>
    <Gallery data={data} />
  </main>
}
