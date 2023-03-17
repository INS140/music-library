import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchBar from './SearchBar'
import Gallery from './Gallery'
import AlbumView from './AlbumView'
import ArtistView from './ArtistView'

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
    <p>{message}</p>
    <Router>
      <Routes>
        <Route path='/' element={
          <>
            <SearchBar setSearch={setSearch} />
            <Gallery data={data} />
          </>
        } />
        <Route path='/album/:id' element={<AlbumView />} />
        <Route path='/artist/:id' element={<ArtistView />} />
      </Routes>
    </Router>
  </main>
}
