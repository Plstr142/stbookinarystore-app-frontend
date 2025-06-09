import React, { useState, useEffect } from 'react'
import TopSellers from './TopSellers'
import Banner from './Banner'
import Recommended from './Recommended'
import Featuredevents from './Featuredevents'

const Home = () => {
  return (
    <>
      <Banner/>
      <TopSellers/>
      <Recommended />
      <Featuredevents />
    </>
  )
}

export default Home