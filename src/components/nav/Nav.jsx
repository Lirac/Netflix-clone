import NavItem from './NavItem'
import { FaBell } from 'react-icons/fa'
import { MdOutlineSearch } from 'react-icons/md'
import { MdArrowDropDown } from 'react-icons/md'
import { IconContext } from 'react-icons'
import { useEffect, useState } from 'react'

const navItems = ['Home', 'TV Shows', 'Movies', 'Latest', 'My List']

const Nav = () => {
  const [show, handleShow] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
    return () => {
      window.removeEventListener('scroll', () => {
        handleShow(false)
      })
    }
  }, [show])
  return (
    <nav
      className={`container flex justify-between py-4 items-center fixed top-0 z-30 transition-all duration-700 delay-200 ${
        show && 'bg-black'
      }`}
    >
      <div className="flex">
        <img
          src="https://pngimg.com/uploads/netflix/small/netflix_PNG12.png"
          alt="Nav logo"
          className="w-36 object-contain mr-10"
        />

        <div className="flex gap-4 items-center">
          {navItems.map(item => (
            <NavItem text={item} />
          ))}
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <IconContext.Provider value={{ color: 'white', size: '30' }}>
          <MdOutlineSearch />
        </IconContext.Provider>
        <NavItem text="Kids" />
        <IconContext.Provider value={{ color: 'white', size: '20' }}>
          <div className="relative">
            <FaBell />
            <span className="absolute top-[-5px] right-[-5px] text-white bg-red-700 rounded-[50%] w-3 h-3 p-2 flex items-center justify-center text-xs font-semibold">
              3
            </span>
          </div>
        </IconContext.Provider>
        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
            width={100}
            height="10px"
            className="w-9 object-contain rounded-md"
          />
          <IconContext.Provider value={{ color: 'white', size: '30' }}>
            <MdArrowDropDown />
          </IconContext.Provider>
        </div>
      </div>
    </nav>
  )
}

export default Nav
