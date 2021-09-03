import React, {FC} from 'react'
import './button-drop.scss'

interface IDropBtnProps {
  open: boolean
  setIsOpen: (opened: boolean) => void
}

export const DropBtn: FC<IDropBtnProps> = ({ open, setIsOpen }) => {
  const dropMenuHandler = () => setIsOpen(!open)

  return(
    <button className="drop-menu-btn material-icons-round" onClick={dropMenuHandler}>
      { open ? 'expand_more' : 'expand_less' }
    </button>
  )
}

