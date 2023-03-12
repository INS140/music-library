import { useState } from 'react'

export default function SearchBar(props) {
  const [searchQuery, setSearchQuery] = useState('')

  const { setSearch } = props

  function handleChange(e) {
    setSearchQuery(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSearch(searchQuery)
  }

  return <form onSubmit={handleSubmit}>
    <label htmlFor='searchQuery'></label>
    <input
      id='searchQuery'
      value={searchQuery}
      onChange={handleChange}
      placeholder='Search for music'
    />
    <button type='submit'>Search</button>
  </form>
}