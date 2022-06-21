import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const footer = () => {
  return (
    <div className="pt-20 pb-4 mx-auto w-[92%] xl:w-[60%]">
      <div className="flex gap-6">
        <IconContext.Provider value={{ color: 'white', size: '25' }}>
          <FaFacebookF className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaYoutube className="cursor-pointer" />
        </IconContext.Provider>
      </div>
      <div className="text-gray-200/60 text-xs flex flex-wrap gap-x-14 md:gap-x-24 gap-y-4 mt-4 lg:font-medium">
        <p href="q" className="basis-[35%] md:basis-[16%] hover:underline cursor-pointer">
          Audio and Subtitles
        </p>
        <p href="q" className=" basis-[35%] md:basis-[16%] hover:underline cursor-pointer">
          Audio Description
        </p>
        <p href="q" className=" basis-[35%] md:basis-[16%] hover:underline cursor-pointer">
          Help Center
        </p>
        <p href="q" className=" basis-[35%] md:basis-[16%] hover:underline cursor-pointer">
          Gift Cards
        </p>
        <p href="q" className=" basis-[35%] md:basis-[16%] hover:underline cursor-pointer">
          Media Center
        </p>
        <p href="q" className=" basis-[35%] md:basis-[16%] hover:underline cursor-pointer">
          Investor Relations
        </p>
        <p href="q" className=" basis-[35%] md:basis-[16%] hover:underline cursor-pointer">
          Jobs
        </p>
        <p href="q" className=" basis-[35%] md:basis-[16%] hover:underline">
          Terms of Use
        </p>
        <p href="q" className=" basis-[35%] md:basis-[16%] hover:underline cursor-pointer">
          Privacy
        </p>
        <p href="q" className=" basis-[35%] md:basis-[16%] hover:underline cursor-pointer">
          Legal Notices
        </p>
        <p href="q" className="basis-[35%] md:basis-[16%] hover:underline">
          Cookie Preference
        </p>
        <p href="q" className="basis-[35%] md:basis-[16%] hover:underline cursor-pointer">
          Corporate Information
        </p>
        <p href="q" className="basis-[35%] md:basis-[16%] hover:underline cursor-pointer">
          Contact Us
        </p>
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
