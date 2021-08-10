import React, {FC} from 'react'
import './AlbumTitle.scss'

export const AlbumTitle: FC = () => {

  return(
    <div className="albums-title">
      <p>Albums</p>
      <div className="albums-title__structure">
        <span className="material-icons-round">
          menu
        </span>
        <span className="material-icons-round">
          grid_view
        </span>
      </div>
    </div>
)}