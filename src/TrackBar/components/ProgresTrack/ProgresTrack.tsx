import React, {FC} from 'react'
import './ProgresTrack.scss'

export const ProgresTrack: FC = () => (
  <div className='progres-track'>
    <p>0:01</p>
    <input type="range" />
    <p>3:07</p>
  </div>
)