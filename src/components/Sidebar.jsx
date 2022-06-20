import { useContext } from 'react'
import { NavContext } from '../context/NavContext'

const Sidebar = () => {
  const { showSidebar } = useContext(NavContext)
  const categories = [
    'Home',
    'My List',
    'Crime',
    'Children & Family',
    'Reality TV',
    'Action',
    'Anime',
    'Comedies',
    'Fantasy',
    'Sci-Fi',
    'Horror',
    'Stand-Up Comedy',
    'Documentaries',
    'Music & Musicals',
    'Romance',
    'Dramas',
  ]
  return (
    <NavContext.Provider>
      <div
        className={`w-2/3 bg-black fixed left-0 top-[3.4%] z-50 h-full transition-all duration-300 ease-linear overflow-y-auto pb-8 ${
          showSidebar ? 'visible' : 'invisible'
        }`}
      >
        <div className="text-white/70">
          <div className="p-4 flex flex-col gap-1 border-b ">
            <div className=" flex gap-2 items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt=""
                className="w-9 object-contain rounded-md cursor-pointer"
              />
              <div>
                <p className="text-sm font-medium leading-3">Guest</p>
                <p className="text-xs">Switch Profiles</p>
              </div>
            </div>
            <h3 className="font-semibold">Account</h3>
            <h3 className="font-semibold">Help Center</h3>
            <h3 className="font-semibold">Sign Out of Netflix</h3>
          </div>
          <div>
            {categories.map(item => (
              <a href='Home#' className="px-4 font-semibold active:border-l-4 border-red-500 mb-1 py-1 block">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </NavContext.Provider>
  )
}

export default Sidebar
