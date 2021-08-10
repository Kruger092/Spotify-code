import React, {FC} from 'react'
import './SongsTitle.scss'

export const SongsTitle: FC = () => {

  return(
    <li className="song-list-title">
      <div className="song-list-title__list">
        <p>#</p>
        <p>Song</p>
      </div>
      <div className="song-list-title__rating">
        <span className="material-icons-round">
          alarm
        </span>
        <span className="material-icons-round">
          thumb_up
        </span>
      </div>
    </li>
)}