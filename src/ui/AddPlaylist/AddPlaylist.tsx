import React, {FC} from 'react'
import './AddPlaylist.scss'

export const AddPlaylist: FC = () => {
  return(
    <button className='add-playlist'>
      <span className='material-icons-round'>
        add_circle_outline
      </span>
      <p>New Playlist</p>
    </button>
  )
}