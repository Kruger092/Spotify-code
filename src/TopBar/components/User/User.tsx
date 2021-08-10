import React, {FC} from 'react'
import { Profile } from '../../../ui/Profile/Profile'
import { UserBtn } from '../../../ui/User-btn/User-btn'
import { DropElement } from '../DropElement/DropElement'
import './User.scss'

export const User: FC = () => (
  <div className="user-interface">
    <UserBtn />
    <Profile />
    <DropElement />
  </div>
)