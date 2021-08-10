import React, {FC} from 'react'
import './Play-btn.scss'

export const PlayBtn: FC = () => {

  return(
    <button className="play-btn">
      <span className="material-icons-round">
        play_arrow
      </span>Play
    </button>
  )
}