import React, {FC} from 'react'

export const NavItem: FC = () => {
  return(
    <>
      <li>
        <span className="material-icons-round">collections</span>
        <a href="/">Browse</a>
      </li>
      <li>
        <span className="material-icons-round">people</span>
        <a href="/">Activity</a>
      </li>
      <li>
        <span className="material-icons-round">sensors</span>
        <a href="/">Radio</a>
      </li>
    </>
  )
}