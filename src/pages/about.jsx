import React from 'react';

import { featuresLanding } from '../_mockData/features';
import Banner from '../components/about/Banner';
import Hero from '../components/about/Hero';
import BlogPreview from '../components/common/BlogPreview';
import Features from '../components/common/Features';
import Testimonials from '../components/common/Testimonials';
import Seo from '../components/Seo';

function about() {
  return (
    <>
      <Seo />
      <Hero />
      <Features type='about' data={featuresLanding} />
      <Banner />
      <BlogPreview />
      <Testimonials />
    </>
  );
}

export default about;
