import React, {FC} from 'react'

export const MusicItem: FC = () => {
  return(
    <>
      <li>
        <span className="material-icons-round">headset</span>
        <a href="/">Songs</a>
      </li>
      <li>
        <span className="material-icons-round">audiotrack</span>
        <a href="/">Albums</a>
      </li>
      <li>
        <span className="material-icons-round">person</span>
        <a href="/">Artists</a>
      </li>
      <li>
        <span className="material-icons-round">description</span>
        <a href="/">Local Files</a>
      </li>
    </>
  )
}
