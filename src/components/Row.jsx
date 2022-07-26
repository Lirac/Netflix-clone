import React, { useState, useEffect } from 'react'
import axios from '../services/axios'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import { MdArrowForwardIos } from 'react-icons/md'
import { MdArrowBackIos } from 'react-icons/md'
import { IconContext } from 'react-icons/lib'
import { useRef } from 'react'

const base_url = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')
  const [titleHover, setTitleHover] = useState(false)
  const rowRef = useRef(null)
  const [isMoved, setIsMoved] = useState(false)

  const handleClick = direction => {
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

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
      className="mt-8"
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
        <h2 className="font-bold text-[3vw] md:text-lg text-white mr-2">
          {title}
        </h2>
        <div
          className={`${
            titleHover ? 'visible opacity-100' : 'invisible opacity-0'
          } flex items-center transition-all duration-700 ease-in-out`}
        >
          <p className="text-teal-600 font-bold">Explore all</p>
          <IconContext.Provider value={{ color: 'teal', size: '20' }}>
            <MdArrowForwardIos />
          </IconContext.Provider>
        </div>
      </div>

      <div className="relative group">
        <MdArrowBackIos
          className={`absolute top-[50%] left-2 h-6 w-6 z-40 text-white cursor-pointer transition-all duration-150 md:group-hover:scale-125 opacity-0 md:group-hover:opacity-100 ${!isMoved && 'hidden'}`}
          onClick={() => handleClick('left')}
        />
        <div
          className="flex overflow-y-hidden overflow-x-scroll md:py-5 space-x-2 scrollbar"
          ref={rowRef}
        >
          {movies.map(movie => (
            <img
              key={movie.id}
              src={`${base_url}${movie.poster_path || movie.backdrop_path}`}
              alt={movie.name}
              onClick={() => handleHover(movie)}
              className="relative w-96 h-40 object-fill z-0 cursor-pointer transition-all ease-in delay-300 duration-300 md:hover:scale-125 hover:z-20 rounded-sm"
            />
          ))}
        </div>
        <MdArrowForwardIos
          className="absolute top-[50%] right-2 h-6 w-6 z-40 text-white cursor-pointer group-hover:scale-125 opacity-0 md:group-hover:opacity-100"
          onClick={() => handleClick('right')}
        />
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
