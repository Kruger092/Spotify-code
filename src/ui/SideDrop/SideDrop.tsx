import React, {FC} from 'react'
import './SideDrop.scss'

interface ISideDropProps {
  value: string
  drop: boolean
  setIsDrop: (value: boolean | ((prevVar: boolean) => boolean)) => void
}

export const SideDrop: FC<ISideDropProps> = ({ drop, setIsDrop, value}) => {
  const dropSideMenuHandler = () => setIsDrop(!drop)

  return(
    <button onClick={dropSideMenuHandler} className="side-drop-btn">
      {value}
      <span className="material-icons-round arrow-btn">{drop ? 'expand_more' : 'expand_less' }</span>
    </button>
  )
}