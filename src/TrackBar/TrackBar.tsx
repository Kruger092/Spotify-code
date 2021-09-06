import React, {FC} from 'react'
import { ControlTrack } from './components/ControlTrack/ControlTrack'
import { OptinsTrack } from './components/OptionsTrack/OptionsTrack'
import { ProgresTrack } from './components/ProgresTrack/ProgresTrack'
import './TrackBar.scss'

export const TrackBar: FC = () => (
  <div className='track-bar'>
    <div className="track-bar__wrap">
      <ControlTrack />
      <ProgresTrack />
    </div>
    <OptinsTrack />
  </div>
)