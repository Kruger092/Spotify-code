import React, {FC} from 'react'
import './Profile.scss'

export const Profile: FC = () => (
  <a href="/" className="profile">
    <img className="profile__photo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/adam_proPic.jpg" alt="Sorry for that" />
    <p>Adam Lowenthal</p>
  </a>
)