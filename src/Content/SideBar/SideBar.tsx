import React, {FC, useState} from 'react'
import { NavItem } from './components/Items/NavItem'
import { MusicItem } from './components/Items/MusicItem'
import { PlaylistItem } from './components/Items/PlaylistItem'
import { CurrentTrack } from './components/CurrentTrack/CurrentTrack'
import { AddPlaylist } from '../../ui/AddPlaylist/AddPlaylist'
import { SideDrop } from '../../ui/SideDrop/SideDrop'
import './SideBar.scss'

export const SideBar: FC = () => {
  const [menuDrop, setIsmenuDrop] = useState(false)
  const [musicDrop, setIsMusicDrop] = useState(false)
  const [playlistDrop, setIsPlaylistDrop] = useState(false)

  return(
    <section className="side-bar">
      <nav className="side-bar__nav">
        <SideDrop
          value={'Main'}
          drop={menuDrop}
          setIsDrop={setIsmenuDrop}
        />
        <ul className={`side-bar__menu  ${menuDrop ? "active" : "inactive"}`}>
          <NavItem />
        </ul>

        <SideDrop
          value={'Your music'}
          drop={musicDrop}
          setIsDrop={setIsMusicDrop}
        />
        <ul className={`side-bar__menu  ${musicDrop ? "active" : "inactive"}`}>
          <MusicItem />
        </ul>

        <SideDrop
          value={'Playlist'}
          drop={playlistDrop}
          setIsDrop={setIsPlaylistDrop}
        />
        <ul className={`side-bar__menu  ${playlistDrop ? "active" : "inactive"}`}>
          <PlaylistItem />
        </ul>
      </nav>
      <AddPlaylist />
      <CurrentTrack />
    </section>
)}