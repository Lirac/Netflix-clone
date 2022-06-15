import { MdOutlineArrowDropUp } from 'react-icons/md'
import { IconContext } from 'react-icons'
import { useContext } from 'react'
import { NavContext } from '../../context/NavContext'

const NavDropDown = () => {
  const { browseClicked, setBrowseClicked } = useContext(NavContext)
  return (
    <div
      className={`flex-col items-center bg-black/90 text-white py-4 border-t-2 text-[13px] active:font-medium absolute top-[45px] left-[1vw] delay-150 transition-all duration-500 ${
        browseClicked ? 'visible flex' : 'invisible'
      }`}
      onMouseEnter={() => setBrowseClicked(true)}
      onMouseLeave={() => setBrowseClicked(false)}
    >
      <IconContext.Provider value={{ color: 'white', size: '30' }}>
        <MdOutlineArrowDropUp className="top-[-20px] right-[40%] absolute" />
      </IconContext.Provider>
      <p className=" w-full px-20 py-4 text-center hover:bg-gray-400/10">
        Home
      </p>
      <p className=" w-full px-20 py-4 text-center hover:bg-gray-400/10">
        Tv Shows
      </p>
      <p className=" w-full px-20 py-4 text-center hover:bg-gray-400/10">
        Movies
      </p>
      <p className=" w-full px-20 py-4 text-center hover:bg-gray-400/10">
        New & Popular
      </p>
      <p className=" w-full px-20 py-4 text-center hover:bg-gray-400/10">
        My List
      </p>
    </div>
  )
}

export default NavDropDown
