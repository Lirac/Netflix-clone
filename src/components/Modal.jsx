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
import { FaPlay } from 'react-icons/fa'

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
      className="fixed !top-10 left-0 right-0 z-50 mx-auto w-full max-w-[55rem] overflow-hidden rounded-md scrollbar-hide overflow-y-scroll"
    >
      <>
        <button
          onClick={handleClose}
          className="modalButton absolute right-0 top-15 !z-40 h-9 w-9 border-none bg-[#181818] text-white hover:bg-[#181818]/90"
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

          <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
            <div className="flex space-x-2">
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

        <div className="rounded-b-md bg-[#181818] space-x-16 py-8">
          <div className="px-10 text-white h-44 space-y-6">
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

            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row space-y-2 md:space-y-0 items-start">
              <p className="w-4/6 font-normal">{movie?.overview}</p>
              <div className="flex flex-col space-y-3 text-sm">
                <div>
                  <span className="text-[gray]">Genres: </span>
                  <span className="font-medium">
                    {genre.map(genre => genre.name).join(', ')}
                  </span>
                </div>
                <div>
                  <span className="text-[gray]">Original language: </span>
                  <span className="font-medium">
                    {' '}
                    {movie?.original_language}
                  </span>
                </div>
                <div>
                  <span className="text-[gray]">Total Votes: </span>
                  <span className="font-medium">{movie?.vote_count}</span>
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
