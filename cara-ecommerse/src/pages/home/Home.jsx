import React from 'react'
import Hero from '../../components/hero/Hero'
import Banner from '../../components/homebanner/Banner'
import Banner2 from '../../components/homebanner/Banner2'
import Banner3 from '../../components/homebanner/Banner3'
import Newsletter from '../../components/newsletter/Newsletter'
import Features from '../../components/features/Features'
import FeatureProduct from '../../components/featureproduct/FeatureProduct'
import Arrival from '../../components/arrival/Arrival'


const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <FeatureProduct />
      <Banner />
      <Arrival />
      <Banner2 />
      <Banner3 />
      <Newsletter />
    </div>
  )
}

export default Home
