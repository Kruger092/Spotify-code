import React, {FC} from 'react'
import { AlbumsInfo } from '../AlbumsInfo/AlbumsInfo'
import './CurrentAlbum.scss'

export const CurrentAlbum: FC = () => {

  return(
    <div className="current-album">
      <div>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg" alt="sss" />
      </div>
      <AlbumsInfo />
    </div>
)}