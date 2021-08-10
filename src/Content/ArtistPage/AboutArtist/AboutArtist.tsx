import React, {FC} from 'react'
import { Background } from '../components/Background/Background'
import { Interaction } from '../components/Interaction/Interaction'
import { Listeners } from '../components/Listeners/Listeners'
import './AboutArtist.scss'

export const AboutArtist: FC = () => (
  <div className="about-artist">
    <Background />
    <div className="about-artist__info">
      <Interaction />
      <Listeners />
    </div>
  </div>
)