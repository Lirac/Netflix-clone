import React, { useState, useEffect } from 'react'
import axios from '../services/axios'

const base_url = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])
  return (
    <div>
      <h2 className="font-bold text-xl text-white">{title}</h2>

      <div className="flex overflow-y-hidden overflow-x-scroll py-8 scrollbar">
        {movies.map(movie => (
          <img
            key={movie.id}
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
            className="w-96 h-40 object-fill z-0 cursor-pointer transition-all ease-in delay-300 duration-300 mr-1 hover:scale-150 hover:z-20 rounded-sm"
          />
        ))}
      </div>
    </div>
  )
}

export default Row
