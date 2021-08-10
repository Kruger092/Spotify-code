import React, {FC} from 'react'
import { ArtistPage } from './ArtistPage/ArtistPage'
import { SideBar } from './SideBar/SideBar'
import { FriendsBar } from './FriendsBar/FriendsBar'
import './Content.scss'

export const Content: FC = () => (
  <div className='content'>
    <SideBar />
    <ArtistPage />
    <FriendsBar />
  </div>
)