import React, {FC} from 'react'
import './User-btn.scss'

export const UserBtn: FC = () => (
  <div>
    <span className="material-icons-round">
      notifications
    </span>
    <span className="material-icons-round">
      move_to_inbox
    </span>
  </div>
)