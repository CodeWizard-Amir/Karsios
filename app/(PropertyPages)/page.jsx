'use client'
import Header from './components/Layout/Header'
import HomePageInfos from './components/HomePageInfos'
import HowToHelp from './components/HowToHelp'
import LastProperties from './components/LastProperties'
import HomePageWeblog from './components/HomePageWeblog'
import Footer from './components/Layout/Footer'

const page = () => {
  return (
    <>
        <Header />
        <HomePageInfos />
        <HowToHelp />
        <LastProperties />
        <HomePageWeblog />
        <Footer />
    </>
  )
}

export default page