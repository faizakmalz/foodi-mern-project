import React from 'react'
import Banner from '../../components/Banner.jsx';
import Categories from './Categories.jsx';
import SpecialDishes from './SpecialDishes.jsx';
import Testimonials from './Testimonials.jsx';
import Ourservices from './Ourservices.jsx';
import Footer from '../../components/Footer.jsx';

const Home = () => {
  return (
    <div>
      <p className='bg-green'>editt</p>
      <Banner />
      <Categories />
      <SpecialDishes/>
      <Testimonials/>
      <Ourservices/>
    </div>
  );
}

export default Home;
