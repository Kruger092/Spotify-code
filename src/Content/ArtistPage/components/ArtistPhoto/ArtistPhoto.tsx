import React, {FC} from 'react'
import './ArtistPhoto.scss'

export const ArtistPhoto: FC = () => {

  return(
    <div className="artist-photo">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/g_eazy_propic.jpg" alt="G-Eazy" />
    </div>
  )
}