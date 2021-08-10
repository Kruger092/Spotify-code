import React, {FC} from 'react'
import { Button } from '../../ui/Button/Button'
import friendsList from '../../fixtures/friends.json'
import './FriendsBar.scss'

export const FriendsBar: FC = () => {

  const frinds = JSON.parse(friendsList)
  
  const listItem = frinds.map((person : any , index : number) => {
    return (
      <li key={index}>
        <span className="material-icons-round">
          person
        </span>
        <a href="/">{person.firstName} {person.lastName}</a>
      </li>
    )
  })

  return (
    <div className="friends-list">
        <ul>
          {listItem}
        </ul>
        <div className="style-btn">
          <Button content={'Find Friends'}/>
        </div>
    </div>
  )
}