import React, {FC} from 'react'
import album from '../../../../fixtures/album.json'

export const PlaylistItem: FC = () => {

  const albumList = JSON.parse(album)
  
  const playlistItem = albumList.map((playlist : any, index : number) => {
    return (
    <li key={index}>
      <span className="material-icons-round">audiotrack</span>
      <a href="/">{playlist.name}</a>
    </li>
  )
  })
  
  return(
    <>
      {playlistItem}
    </>
  )
}