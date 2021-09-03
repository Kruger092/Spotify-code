import React, {FC} from 'react'
import './ArtistInfo.scss'

interface IArtistInfoProps {
  type: string
  pseudonym: string
}

export const ArtistInfo: FC <IArtistInfoProps> = ({ type, pseudonym } ) => {

  return (
    <>
      <p className="type">{type}</p>
      <p className="name">{pseudonym}</p>
    </>
  )
}