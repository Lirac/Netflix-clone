import React, { useState, useEffect } from 'react'
import axios from '../services/axios'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import { MdArrowForwardIos } from 'react-icons/md'
import { IconContext } from 'react-icons/lib'

const base_url = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')
  const [titleHover, setTitleHover] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }

  const handleHover = movie => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.name || '')
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'))
        })
        .catch(error => console.log(error))
    }
  }
  return (
    <div
      onMouseLeave={() => {
        setTitleHover(false)
      }}
    >
      <div
        className="flex items-center gap-1"
        onMouseEnter={() => {
          setTitleHover(true)
        }}
      >
        <h2 className="font-bold text-xl text-white mr-2">{title}</h2>
        <div
          className={`${
            titleHover ? 'visible opacity-100' : 'invisible opacity-0'
          } flex items-center transition-all duration-300 ease-in-out`}
        >
          <p className="text-teal-600 font-bold">Explore all</p>
          <IconContext.Provider value={{ color: 'teal', size: '20' }}>
            <MdArrowForwardIos />
          </IconContext.Provider>
        </div>
      </div>

      <div className="flex overflow-y-hidden overflow-x-scroll py-5 scrollbar">
        {movies.map(movie => (
          <img
            key={movie.id}
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
            onClick={() => handleHover(movie)}
            className="relative w-96 h-40 object-fill z-0 cursor-pointer transition-all ease-in delay-300 duration-300 mr-1 hover:scale-150 hover:z-20 rounded-sm"
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
