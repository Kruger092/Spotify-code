import React from 'react'
import './App.scss'
import { Content } from './Content/Content';
import { TrackBar } from './TrackBar/TrackBar';
import { TopBar } from './TopBar/TopBar';

const App = () => {
  return (
    <>
      <TopBar />
      <Content />
      <TrackBar />
    </>
  )
}

export default App;
