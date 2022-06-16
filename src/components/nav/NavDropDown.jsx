import { MdOutlineArrowDropUp } from 'react-icons/md'
import { BsPencilFill } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import { BiHelpCircle } from 'react-icons/bi'
import { IconContext } from 'react-icons'
import { useContext } from 'react'
import { NavContext } from '../../context/NavContext'

const NavDropDown = () => {
  const { userDropDown, setUserDropDown } = useContext(NavContext)
  return (
    <div
      className={`bg-black/90 text-white py-4 text-[13px] font-medium absolute top-[45px] lg:top-[70px] right-4 lg:right-10 transition-all duration-500 ${
        userDropDown ? 'visible' : 'invisible'
      }`}
      onMouseEnter={() => setUserDropDown(true)}
      onMouseLeave={() => setUserDropDown(false)}
    >
      <IconContext.Provider value={{ color: 'white', size: '30' }}>
        <MdOutlineArrowDropUp className="top-[-17px] lg:right-6 right-2 absolute" />
      </IconContext.Provider>
      <div className="border-b-[1px] border-gray-400 pl-3 pr-8 mb-2">
        <div className="flex items-center gap-2 mb-4 cursor-pointer">
          <img
            src="https://occ-0-299-1168.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVdd3ixeBOfi58wD97RIuaBnbw5-dhis915qFDUUppsAOuYMCFwAnEg7XoTo5eNgOCeTgEPKEyDzOPZUG5hWwSdwOmt00Ms.png?r=fcd"
            alt=""
            className="rounded-md"
          />
          <a href="q" className="hover:underline">
            Kids
          </a>
        </div>
        <div className="flex items-center gap-5 mb-4 cursor-pointer">
          <IconContext.Provider value={{ color: 'gray', size: '20' }}>
            <BsPencilFill />
          </IconContext.Provider>
          <a href="q" className="hover:underline">
            Manage Profiles
          </a>
        </div>
      </div>
      <div className="border-b-[1px] border-gray-400 pl-3 pr-8 mb-2">
        <div className="flex items-center gap-5 mb-4 cursor-pointer">
          <IconContext.Provider value={{ color: 'gray', size: '20' }}>
            <BiUser />
          </IconContext.Provider>
          <a href="q" className="hover:underline">
            Account
          </a>
        </div>
        <div className="flex items-center gap-5 mb-4 cursor-pointer">
          <IconContext.Provider value={{ color: 'gray', size: '20' }}>
            <BiHelpCircle />
          </IconContext.Provider>
          <a href="q" className="hover:underline">
            Help Center
          </a>
        </div>
      </div>
      <div className="pl-3 py-1 pr-8 flex justify-center">
        <div className='cursor-pointer'>
          <a href="q" className="hover:underline">
            Sign out of Netflix
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavDropDown
