import React, {FC} from 'react'
import { Button } from '../../../../ui/Button/Button'
import { MoreBtn } from '../../../../ui/More-btn/More-btn'
import './AlbumsInfo.scss'

export const AlbumsInfo: FC = () => {

  return(
    <div className="albums-info">
      <div>
        <p>2015</p>
        <h1>When It`s Dark Out</h1>
      </div>
      <div className="albums-info__btn">
        <div className="style-btn">
          <Button content={'Save'}/>
        </div>
        <MoreBtn />
      </div>
    </div>
)}