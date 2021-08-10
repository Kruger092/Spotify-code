import React, {FC} from 'react'
import { Button } from '../../../../ui/Button/Button'
import popularTrack from '../../../../fixtures/popularTracks.json'
import './PopularTrack.scss'

export const PopularTrack: FC = () => {
  const tracks = JSON.parse(popularTrack)

  const album = tracks.map((track : any, index : number) => {
    return (
      <li key={index}>
        <div className="popular-track__item">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg" alt="" />
          <p>{++index}</p>
          <span className="material-icons-round">
            {track.status}
          </span>
          <p>{track.name}</p>
        </div>
        <span className="popular-track__explicit">Explicit</span>
        <p>{track.listened}</p>
      </li>
    )
  })

  return (
    <div className="popular-track">
      <p className="popular-track__title">Popular</p>
      <ul>
        {album}
      </ul>
      <Button content={'Show 5 more'} />
    </div>
  )
}
