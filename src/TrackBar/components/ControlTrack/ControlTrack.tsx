import React, {FC} from 'react'
import './ControlTrack.scss'

export const ControlTrack: FC = () => (
  <div className='material-icons-round control-track'>
    <button>skip_previous</button>
    <button className="control-track__play">play_arrow</button>
    <button>skip_next</button>
  </div>
)