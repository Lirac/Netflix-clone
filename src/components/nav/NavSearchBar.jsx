import { MdOutlineSearch } from 'react-icons/md'
import { IconContext } from 'react-icons'
import { NavContext } from '../../context/NavContext'
import { useContext } from 'react'

const NavSearchBar = () => {
  const { showSearch, setShowSearch } = useContext(NavContext)
  return (
    <div
      className={`flex items-center transition-all duration-200 ease-linear ${
        showSearch ? 'border-[1px] bg-black gap-1 px-1' : ''
      }`}
    >
      <IconContext.Provider value={{ color: 'white', size: '30' }}>
        <MdOutlineSearch onClick={() => setShowSearch(true)} className='hidden md:block' />
      </IconContext.Provider>
      <input
        type="text"
        name=""
        id="search"
        className={`bg-transparent border border-slate-300 md:border-0 outline-none text-sm md:font-medium text-white px-2 placeholder:text-xs placeholder:text-slate-400 w-[30vw] md:w-fit ${
          showSearch ? '' : 'md:hidden'
        }`}
        placeholder="Search"
        onBlur={() => setShowSearch(false)}
      />
    </div>
  )
}

export default NavSearchBar
