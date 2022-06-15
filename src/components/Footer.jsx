import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const footer = () => {
  return (
    <div className="pt-20 pb-4 mx-auto w-[60%]">
      <div className="flex gap-6">
        <IconContext.Provider value={{ color: 'white', size: '25' }}>
          <FaFacebookF className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaYoutube className="cursor-pointer" />
        </IconContext.Provider>
      </div>
      <div className="text-gray-200/60 text-xs flex flex-wrap gap-x-24 gap-y-4 mt-4 font-medium">
        <a href="q" className="basis-[16%] hover:underline">
          Audio and Subtitles
        </a>
        <a href="q" className="basis-[16%] hover:underline">
          Audio Description
        </a>
        <a href="q" className="basis-[16%] hover:underline">
          Help Center
        </a>
        <a href="q" className="basis-[16%] hover:underline">
          Gift Cards
        </a>
        <a href="q" className="basis-[16%] hover:underline">
          Media Center
        </a>
        <a href="q" className="basis-[16%] hover:underline">
          Investor Relations
        </a>
        <a href="q" className="basis-[16%] hover:underline">
          Jobs
        </a>
        <a href="q" className="basis-[16%] hover:underline">
          Terms of Use
        </a>
        <a href="q" className="basis-[16%] hover:underline">
          Privacy
        </a>
        <a href="q" className="basis-[16%] hover:underline">
          Legal Notices
        </a>
        <a href="q" className="basis-[16%] hover:underline">
          Cookie Preference
        </a>
        <a href="q" className="basis-[16%] hover:underline">
          Corporate Information
        </a>
        <a href="q" className="basis-[16%] hover:underline">
          Contact Us
        </a>
      </div>
      <div className="border border-gray-200/60 text-gray-200/60 text-xs font-semibold p-2 inline-block mt-8 cursor-pointer hover:text-white">
        Service Code
      </div>
      <div className="text-gray-200/60 text-xs mt-4">
        <span>&#169;</span> 1997-2022 Netflix Inc.
      </div>
    </div>
  )
}

export default footer
