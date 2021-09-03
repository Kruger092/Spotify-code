import React, { FC, useState, useEffect, useRef } from 'react'
import { DropBtn } from '../../../ui/Drop-btn/button-drop'
import { DropNav } from '../DropNav/DropNav'
import './DropElement.scss'

export const DropElement: FC = () => {
  const dropDownElement = useRef<any>()
  const [open, setIsOpen] = useState(false)

  const handleClick = (e : MouseEvent) => {
    if (dropDownElement.current.contains(e.target)) {
      return
    } else {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick)
  }, []);

  return( 
    <div ref={dropDownElement} className="drop-element">
      <DropBtn
        open={open}
        setIsOpen={setIsOpen}  
      />
      <DropNav open={open}/>
    </div>

)}