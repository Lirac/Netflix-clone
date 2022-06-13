import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const footer = () => {
  return (
    <div className="pt-20 pb-4 mx-auto w-[60%]">
      <div className='flex gap-6'>
        <IconContext.Provider value={{ color: 'white', size: '25' }}>
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
        </IconContext.Provider>
      </div>
      <div className='text-gray-200/60 text-xs flex flex-wrap gap-x-24 gap-y-4 mt-4 font-medium'>
          <a href='#' className='basis-[16%]'>Audio and Subtitles</a>
          <a href='#' className='basis-[16%]'>Audio Description</a>
          <a href='#' className='basis-[16%]'>Help Center</a>
          <a href='#' className='basis-[16%]'>Gift Cards</a>
          <a href='#' className='basis-[16%]'>Media Center</a>
          <a href='#' className='basis-[16%]'>Investor Relations</a>
          <a href="#" className='basis-[16%]'>Jobs</a>
          <a href="#" className='basis-[16%]'>Terms of Use</a>
          <a href="#" className='basis-[16%]'>Privacy</a>
          <a href="#" className='basis-[16%]'>Legal Notices</a>
          <a href="#" className='basis-[16%]'>Cookie Preference</a>
          <a href="#" className='basis-[16%]'>Corporate Information</a>
          <a href="#" className='basis-[16%]'>Contact Us</a>
      </div>
      <div className='border border-gray-200/60 text-gray-200/60 text-xs font-semibold p-2 inline-block mt-8 cursor-pointer hover:text-white'>
          Service Code
      </div>
      <div className='text-gray-200/60 text-xs mt-4'>
         <span>&#169;</span> 1997-2022 Netflix Inc.
      </div>
    </div>
  )
}

export default footer
