import React, {FC} from 'react'
import { PageFlow } from '../ui/Page-flow/Page-flow'
import { Serch } from '../ui/Serch/Serch'
import { User } from './components/User/User'
import './TopBar.scss'

export const TopBar: FC = () => (
  <header className="top-bar">
    <div className='top-bar__ui'>
      <PageFlow/>
      <Serch/>
    </div>
    <User/>
  </header>
)