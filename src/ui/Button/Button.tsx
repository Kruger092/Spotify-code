import React, {FC} from 'react'
import './Button.scss'

interface IButtonProps {
  content: string
}

export const Button: FC<IButtonProps> = ({ content }) => {
  return (
    <button className='button'>{content}</button>
)}