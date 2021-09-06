import React, {FC} from 'react'
import artists from '../../../../fixtures/artists.json'
import './ArtistsList.scss'

export const ArtistsList: FC = () => {

  const artistsList = JSON.parse(artists)

  const artistsItem = artistsList.map((person : any , index : number) => {
    return (
      <ul key={index} className="artists-list__item">
        <li>
          <img src={person.photo} alt="sss" />
          <a href="/">{person.name}</a>
        </li>
      </ul>
    )
  })

  return(
    <div className="artists-list">
      <p>Related Artists</p>
      <div className="artists-list__wrap">
        {artistsItem}
      </div>
    </div>
  )}