import React from 'react';

import AboutUs from '../components/about/AboutUs';
import Banner from '../components/about/Banner';
import Features from '../components/about/Features';
import Hero from '../components/about/Hero';
import Stats from '../components/about/Stats';
import BlogPreview from '../components/common/BlogPreview';
import Testimonials from '../components/common/Testimonials';
import Seo from '../components/Seo';

function about() {
  return (
    <div>
      <Seo />
      <Hero />
      <AboutUs />
      <Stats />
      <Features />
      <Banner />
      <BlogPreview />
      <Testimonials />
    </div>
  );
}

export default about;
