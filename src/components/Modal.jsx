import React from 'react'
import MuiModal from '@mui/material/Modal'
import ReactPlayer from 'react-player/lazy'
import {
  PlusIcon,
  ThumbUpIcon,
  VolumeOffIcon,
  VolumeUpIcon,
  XIcon,
} from '@heroicons/react/solid'
import { useRecoilState } from 'recoil'
import { movieState, modalState } from '../atoms/modalAtom'
import { useState, useEffect } from 'react'
import { FaDownload, FaPlay, FaPlus, FaThumbsUp } from 'react-icons/fa'
import { BsShare } from 'react-icons/bs'

const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [movie, setMovie] = useRecoilState(movieState)
  const [trailer, setTrailer] = useState('')
  const [genre, setGenre] = useState([])
  const [muted, setMuted] = useState(false)
  const API_KEY = '241ade1f4dee22284bd4594ae3667e0c'

  const handleClose = () => {
    setShowModal(false)
  }

  useEffect(() => {
    if (!movie) return

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${
          movie?.id
        }?api_key=${API_KEY}&language=en-US&append_to_response=videos`
      )
        .then(res => res.json())
        .catch(err => console.log(err.message))
      console.log(data)
      if (data?.videos?.results.length > 0) {
        const index = data.videos.results.findIndex(
          video => video.type === 'Trailer'
        )
        setTrailer(data.videos?.results[index]?.key)
      }

      if (data?.genres) {
        setGenre(data.genres)
      }
    }

    fetchMovie()
  }, [movie])

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixed !top-0 md:!top-10 left-0 right-0 z-50 mx-auto w-full max-w-[55rem] overflow-hidden rounded-md scrollbar-hide overflow-y-scroll"
    >
      <>
        <button
          onClick={handleClose}
          className="modalButton absolute md:right-0 left-0  top-15 !z-40 h-9 w-9 border-none bg-[#181818] text-white hover:bg-[#181818]/90"
        >
          <XIcon className="h-6 w-6"></XIcon>
        </button>

        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: '0', left: '0' }}
            playing
            muted={muted}
          />

          <div className="absolute bottom-5 md:bottom-10 flex w-full items-center justify-between px-5 md:px-10">
            <div className="flex space-x-2 invisible md:visible">
              <button className="flex items-center gap-x-2 rounded bg-white px-8  text-xl font-bold transition-all hover:bg-[#e6e6e6]">
                <FaPlay className="h-7 w-7 text-black" />
                Play
              </button>
              <button className="modalButton ">
                <PlusIcon className="h-7 w-7 text-white" />
              </button>
              <button className="modalButton ">
                <ThumbUpIcon className="h-7 w-7 text-white" />
              </button>
            </div>
            <button className="modalButton" onClick={() => setMuted(!muted)}>
              {muted ? (
                <VolumeOffIcon className="w-6 h-6"></VolumeOffIcon>
              ) : (
                <VolumeUpIcon className="w-6 h-6"></VolumeUpIcon>
              )}
            </button>
          </div>
        </div>

        <div className="px-5 md:px-10 rounded-b-md bg-[#181818] space-x-16 py-4 md:min-h-[400px] min-h-screen">
          <div className="text-white h-44 space-y-6">
            <h3 className="md:hidden font-bold text-2xl">{movie?.title}</h3>
            <div className="flex items-center space-x-2 text-sm">
              <p className="font-semibold text-green-400">
                {Math.floor(movie?.vote_average * 10)}% Match
              </p>
              <p className="font-medium text-white">
                {movie?.release_date || movie?.first_air_date}
              </p>
              <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs text-white">
                HD
              </div>
            </div>

            <div className="space-y-3 md:hidden">
              <button className="modalButtonBlock">
                <FaPlay className="h-4 w-4 text-black" />
                Play
              </button>
              <button className="modalButtonBlock bg-zinc-800 text-white">
                <FaDownload className="h-4 w-4 text-white" />
                Download
              </button>
            </div>

            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row space-y-4 md:space-y-0 items-start">
              <p className="w-full md:w-4/6 font-normal h-fit">
                {movie?.overview}
              </p>
              <div className="flex flex-wrap md:flex-col md:space-y-3 gap-2 text-sm">
                <div className="">
                  <span className="text-[gray]">Genres: </span>
                  <span className="md:font-medium">
                    {genre.map(genre => genre.name).join(', ')}
                  </span>
                </div>
                <div>
                  <span className="text-[gray]">Original language: </span>
                  <span className="md:font-medium">
                    {' '}
                    {movie?.original_language}
                  </span>
                </div>
                <div>
                  <span className="text-[gray]">Total Votes: </span>
                  <span className="md:font-medium">{movie?.vote_count}</span>
                </div>
              </div>

              <div className="flex md:hidden justify-center space-x-16 items-center w-full">
                <div className="flex flex-col items-center space-y-2">
                  <FaPlus className="h-5 w-5 text-white" />
                  <p>My List</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <FaThumbsUp className="h-5 w-5 text-white" />
                  <p>Rate</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <BsShare className="h-5 w-5 text-white" />
                  <p>Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  )
}

export default Modal
