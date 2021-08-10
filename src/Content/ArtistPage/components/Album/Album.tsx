import React, {FC} from 'react'
import { CurrentAlbum } from '../CurrentAlbum/CurrentAlbum'
import { AlbumTitle } from '../AlbumTitle/AlbumTitle'
import './Album.scss'

export const Album: FC = () => {

  return(
    <div className="album">
      <AlbumTitle />
      <CurrentAlbum />
    </div>
)}