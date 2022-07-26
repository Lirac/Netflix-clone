import React, { useEffect, useState } from 'react'
import axios from '../services/axios'
import requests from '../services/request'
import { FaPlay } from 'react-icons/fa'
import { MdInfoOutline } from 'react-icons/md'
import { AiOutlineReload } from 'react-icons/ai'
import { IconContext } from 'react-icons'

const Banner = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      return request
    }
    fetchData()
  }, [])
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }
  return (
    <header
      style={
        {
          backgroundSize: 'cover',
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: 'center center',
        }
      }
      className="text-white object-contain h-[55vw] xl:h-[90vh] relative z-0"
    >
      {/* <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt=""
        className='w-full h-full'
      /> */}
      <div className="ml-4 lg:ml-8 w-[50%] absolute top-[40%]">
        <h1 className="text-[3vw] font-bold my-2">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h1 className="max-w-xs text-xs md:max-w-lg md:text-lg">
          {truncate(movie?.overview, 150)}
        </h1>
        <div className="mt-4 flex">
          <div className="px-2 lg:px-8 lg:py-2  font-medium bg-white hover:bg-white/90 text-black rounded-sm md:rounded-md mr-2 flex justify-around items-center gap-2 text-[1.8vw] lg:text-lg duration-200 ease-in transition-all">
            <FaPlay />
            Play
          </div>
          <button className=" py-1 px-2 lg:px-8 lg:py-2 font-semibold bg-gray-400/80 hover:bg-gray-400/50 text-white rounded-sm md:rounded-md  flex justify-center items-center gap-2 text-[1.8vw] lg:text-lg duration-200 ease-in transition-all">
            <IconContext.Provider value={{}}>
              <MdInfoOutline /> More Info
            </IconContext.Provider>
          </button>
        </div>
      </div>
      <div className="hidden absolute right-0 top-[65%] md:flex gap-3 items-center">
        <span className="w-full bg-transparent border-2 p-2 hover:opacity-70 rounded-full cursor-pointer duration-200 ease-in transition-all">
          <IconContext.Provider value={{ size: '20' }}>
            <div>
              <AiOutlineReload />
            </div>
          </IconContext.Provider>
        </span>
        <button className=" pr-12 pl-2 py-2 font-semibold bg-gray-700/30 text-white mr-2 text-lg border-l-2 cursor-default">
          16+
        </button>
      </div>
      <div className="h-20 bg-gradient-to-b from-transparent to-black absolute bottom-0 w-full"></div>
    </header>
  )
}

export default Banner
