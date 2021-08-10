import React, {FC} from 'react'
import { Button } from '../../../../ui/Button/Button'
import { MoreBtn } from '../../../../ui/More-btn/More-btn'
import { PlayBtn } from '../../../../ui/Play-btn/Play-btn'
import { ArtistPhoto } from '../ArtistPhoto/ArtistPhoto'
import { Name } from '../Name/Name'
import './Interaction.scss'

export const Interaction: FC = () => {

  return(
    <div className="interaction">
      <ArtistPhoto />
      <div className="interaction__meta">
        <Name type={'Artist'} pseudonym={'G-Eazy'}/>
        <div className="interaction__buttons">
          <PlayBtn />
          <div className="style-btn">
            <Button content={'Follow'}/>
          </div>
          <MoreBtn />
        </div>
      </div>
  </div>
  )
}