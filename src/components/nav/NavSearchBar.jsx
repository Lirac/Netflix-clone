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
        className={`bg-transparent border-0 outline-none text-sm font-medium text-white px-2 ${
          showSearch ? '' : 'md:hidden'
        }`}
        placeholder="Title, people, genres"
        ref={input => input && input.focus()}
        onBlur={() => setShowSearch(false)}
      />
    </div>
  )
}

export default NavSearchBar
