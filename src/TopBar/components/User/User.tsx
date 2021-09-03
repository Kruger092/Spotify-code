import React, {FC} from 'react'
import { Profile } from '../../../ui/Profile/Profile'
import { UserBtn } from '../../../ui/User-btn/User-btn'
import { DropElement } from '../DropElement/DropElement'
import './User.scss'

export const User: FC = () => (
  <div className="user-interface">
    <UserBtn />
    <Profile 
      img={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/adam_proPic.jpg'}
      logName={'Adam Lowenthal'}
    />
    <DropElement />
  </div>
)