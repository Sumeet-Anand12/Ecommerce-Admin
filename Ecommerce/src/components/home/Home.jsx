import React from 'react'
import Rotation from './loader/Rotation'
import CategoryPanel from './sidebarPanel/CategoryPanel';
import Banner from './banner/Banner';
import HomeCatSlider from './slider/HomeCatSlider';
import CardBanner from './cardbanner/CardBanner';
import CategoryTab from './categoryTab/CategoryTab';
import LatestProduct from './latestProduct/LatestProduct';
import BannerCard from './bannerTwo/BannerCard';
import FeaturedProduct from './featuredProduct/FeaturedProduct';
import FeaturedBanner from './bannerTwo/FeaturedBanner';
import Logo from './logo/Logo';


const HomePage = () => {
  return (
    <div>
      <div className='home-page'>
        <Rotation />
        <Banner />
        <HomeCatSlider />
      </div>
      <div className='home-card-banner'>
        <CardBanner />
         <CategoryTab />
      </div>
      <LatestProduct />
      <BannerCard />
      <FeaturedProduct />
      <FeaturedBanner />
      <Logo />
    </div>
  )
}

export default HomePage;