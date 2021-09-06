import React, {FC} from 'react'
import './CurrentTrack.scss'

export const CurrentTrack: FC = () => {
  return(
    <div className="current-track">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/cputh.jpg" alt="Sorry for that" />
      <div className="current-track__about">
        <a href="/">Some Type of Love</a>
        <a href="/">Charlie Puth</a>
      </div>
      <span className="material-icons-round">
        done
      </span>
    </div>
  )
}