import React, {FC} from 'react'
import './OptionsTrack.scss'

export const OptinsTrack: FC = () => (
  <div className="options-track">
    <a href='/'>Lurics</a>
    <span className="material-icons-round">menu</span>
    <span className="material-icons-round">shuffle</span>
    <span className="material-icons-round">sync</span>
    <span className="options-track__devaices">
      <p className="material-icons-round">smartphone</p> 
      <p className="margin">Devices Available</p>
    </span>
    <span className="options-track__volume">
      <p className="material-icons-round" >volume_up</p> 
      <input type="range" />
    </span>
  </div>
)