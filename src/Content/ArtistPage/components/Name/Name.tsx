import React, {FC} from 'react'
import './Name.scss'

interface INameProps {
  type: string
  pseudonym: string
}

export const Name: FC <INameProps> = ({ type, pseudonym } ) => {

  return (
    <>
      <p className="type">{type}</p>
      <p className="name">{pseudonym}</p>
    </>
  )
}