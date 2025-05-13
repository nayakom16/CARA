import React from 'react'
import Banner from '../../components/aboutpage/aboutbanner/Banner'
import HeroAbout from '../../components/aboutpage/about-hero/HeroAbout'
import VideoAbout from '../../components/aboutpage/about-video/VideoAbout'
import Features from '../../components/features/Features'
import Newsletter from '../../components/newsletter/Newsletter'

const About = () => {
  return (
    <div>
      <Banner />
      <HeroAbout />
      <VideoAbout />
      <Features />
      <Newsletter />
    </div>
  )
}

export default About
