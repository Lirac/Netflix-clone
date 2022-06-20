import NavItem from './NavItem'
import { FaBell } from 'react-icons/fa'
import { MdArrowDropDown } from 'react-icons/md'
import { IconContext } from 'react-icons'
import { useEffect, useState } from 'react'
import NavDropDown from './NavDropDown'
import NavBrowseDropDown from './NavBrowseDropDown'
import { NavContext } from '../../context/NavContext'
import NavSearchBar from './NavSearchBar'

const navItems = ['Home', 'TV Shows', 'Movies', 'Latest', 'My List']

const Nav = () => {
  const [show, handleShow] = useState(false)
  const [userDropDown, setUserDropDown] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [browseClicked, setBrowseClicked] = useState(false)

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
  }, [])

  return (
    <NavContext.Provider
      value={{
        userDropDown,
        setUserDropDown,
        showSearch,
        setShowSearch,
        browseClicked,
        setBrowseClicked,
      }}
    >
      <nav
        className={`w-full py-1 px-2 lg:px-4  lg:py-3  fixed top-0 z-30 transition-all duration-500 delay-200 ${
          show && 'bg-black'
        }`}
      >
        <div className="flex items-center">
          <div className="flex mr-16">
            <img
              src="https://pngimg.com/uploads/netflix/small/netflix_PNG12.png"
              alt="Nav logo"
              className="w-[14vw] md:w-[12vw] lg:w-36 object-contain mr-6 lg:mr-10"
            />
            <div
              className="lg:hidden flex items-center cursor-pointer"
              onMouseOver={() => setBrowseClicked(true)}
              onMouseLeave={() => setBrowseClicked(false)}
            >
              <p className="text-white text-[1.5vw] font-medium">Browse</p>
              <IconContext.Provider value={{ color: 'white', size: '25' }}>
                <MdArrowDropDown
                 className='lg:hidden'
                />
              </IconContext.Provider>
            </div>
            <div className="hidden lg:flex gap-4 items-center">
              {navItems.map(item => (
                <NavItem text={item} />
              ))}
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <NavSearchBar />
            <span className="hidden lg:block">
              <NavItem text="Kids" />
            </span>
            <IconContext.Provider value={{ color: 'white', size: '25' }}>
              <div className="relative hidden md:block">
                <FaBell />
                <span className="absolute top-[-5px] right-[-5px] text-white bg-red-700 rounded-[50%] w-3 h-3 p-2 flex items-center justify-center text-xs font-semibold">
                  3
                </span>
              </div>
            </IconContext.Provider>
            <div>
              <div
                className="flex items-center"
                onMouseOver={() => setUserDropDown(true)}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                  alt=""
                  className="w-7 lg:w-9 object-contain rounded-md cursor-pointer hidden md:block"
                  onMouseLeave={() => setUserDropDown(false)}
                />

                <IconContext.Provider value={{ color: 'white', size: '30' }}>
                  <MdArrowDropDown
                    className={`${
                      userDropDown ? 'rotate-180' : ''
                    } transition-all duration-300 delay-150 hidden lg:block`}
                  />
                </IconContext.Provider>
              </div>
            </div>
          </div>
          <NavDropDown userDropDown={userDropDown} />
          <NavBrowseDropDown />
        </div>
      </nav>
    </NavContext.Provider>
  )
}

export default Nav
