import React from 'react'

const NavItem = ({ text }) => {
  return <p className="text-white/80 hover:text-white/70 active:font-bold active:text-white font-medium text-sm">{text}</p>
}

export default NavItem
