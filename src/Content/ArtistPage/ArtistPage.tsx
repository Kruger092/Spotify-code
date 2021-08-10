import React, {FC} from 'react'
import { AboutArtist } from './AboutArtist/AboutArtist'
import { Tabs } from './TabElemet/tabs'
import { Tab } from './TabElemet/tab'
import { RelatedPage } from './RelatedArtists/RelatedArtists'
import { Overview } from './Overwiew/Overwiew'
import './ArtistPage.scss'

  export const ArtistPage: FC = () => {

  return(
    <section className="artist-page">
      <AboutArtist />
      <Tabs>
        <Tab title="Overview">
          <Overview />
        </Tab>
        <Tab title="Related Artists">
          <RelatedPage />
        </Tab>
      </Tabs>
    </section>
)}
  