import React, {FC} from 'react'
import './DropNav.scss'

interface IDropNavProps {
  open: boolean
}

export const DropNav: FC <IDropNavProps> = ({ open }) => {

  return(
    <nav className={`drop-nav ${open ? "active" : "inactive"}`}>
      <ul>
        <li><a href="/">Private Session</a></li>
        <li><a href="/">Account</a></li>
        <li><a href="/">Settings</a></li>
        <li><a href="/">Log Out</a></li>
      </ul>
    </nav>
  )
}