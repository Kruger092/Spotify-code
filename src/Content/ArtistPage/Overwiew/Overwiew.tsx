import React, {FC} from 'react'
import { Album } from '../components/Album/Album'
import { ArtistsList } from '../components/ArtistsList/ArtistsList'
import { PopularTrack } from '../components/PopularTrack/PopularTrack'
import { LatestRelease } from '../components/LatestRelease/LatestRelease'
import { SongList } from '../components/SongList/SongList'
import './Overwiew.scss'

export const Overview: FC = () => {

  return(
    <div className="overwiew">
      <div className="overwiew__artist">
        <div className="overwiew__artist-wrapp">
          <LatestRelease />
          <PopularTrack />
        </div>
        <ArtistsList/>
      </div>
      <div className="overwiew__albums">
        <Album />
        <SongList />
      </div>
    </div>
)}