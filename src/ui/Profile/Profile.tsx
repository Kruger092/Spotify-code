import React, {FC} from 'react'
import './Profile.scss'

interface IProfileProps {
  img: string
  logName: string
}

export const Profile: FC<IProfileProps> = ({ img, logName }) => (
  <a href="/" className="profile">
    <img className="profile__photo" src={img} alt="Sorry for that" />
    <p>{logName}</p>
  </a>
)