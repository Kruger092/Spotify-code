import React, {FC} from 'react'
import './LatestRelease.scss'

export const LatestRelease: FC = () => {
  return(
    <div className="latest-release">
      <p className="latest-release__title">Latest Relaese</p>
      <div className="latest-release__item">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg" alt="ss" />
        <div className="latest-release__track">
          <p>Drifting (Track Commentary)</p>
          <p>4 December 2015</p>
        </div>
      </div>
    </div>
)}
