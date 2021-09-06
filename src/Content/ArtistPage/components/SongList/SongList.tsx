import React, {FC} from 'react'
import { SongsTitle } from '../SongsTitle/SongsTitle'
import trackList from '../../../../fixtures/songList.json'
import './SongList.scss'

export const SongList: FC = () => {
  const list = JSON.parse(trackList)

  const songItem = list.map((person : any, index : number) => {
    return (
      <li className="song-list-element" key={index}>
        <div className="song-list-element__track">
          <p>{++index}</p>
          <span className="material-icons-round">
            {person.add}
          </span>
          <a href="/">{person.name}</a>
        </div>
        <div className="song-list-element__rating">
          <span className="explicit">
            Explicit
          </span>
          <div className="wrapper-for-tablet">
            <p>{person.time}</p>
            <span className="material-icons-round hide-icon">
              {person.rating}
            </span>
          </div>
        </div>
      </li>)
  })

  return(
    <div className="song-list">
      <ul>
        <SongsTitle />
        {songItem}
      </ul>
    </div>
)}
