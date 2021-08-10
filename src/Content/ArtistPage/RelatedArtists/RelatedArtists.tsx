import React, {FC} from 'react'
import relatedArtists from '../../../fixtures/relatedArtists.json'
import './RelatedArtists.scss'

export const RelatedPage: FC = () => {

  const artists = JSON.parse(relatedArtists)

  const card = artists.map((person : any, index : number) => {
    return (
    <div className="related-page__card" key={index}>
      <div className="photo">
        <img src={person.photo} alt="sss" />
        <button className="material-icons-round">play_arrow</button>
      </div>
      <a href="/">{person.name}</a>
    </div>)
  })

  return(
    <div className="related-page">
      {card}
    </div>
)}
