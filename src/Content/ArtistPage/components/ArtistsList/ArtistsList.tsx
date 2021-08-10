import React, {FC} from 'react'
import artists from '../../../../fixtures/artists.json'
import './ArtistsList.scss'

export const ArtistsList: FC = () => {

  const artistsList = JSON.parse(artists)

  const artistsItem = artistsList.map((person : any , index : number) => {
    return (
      <ul key={index}>
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
      {artistsItem}
    </div>
  )}