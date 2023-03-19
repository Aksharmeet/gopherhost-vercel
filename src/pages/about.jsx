import React from 'react';

import { featuresLanding } from '../_mockData/features';
import Banner from '../components/about/Banner';
import BlogPreview from '../components/common/BlogPreview';
import Features from '../components/common/Features';
import Testimonials from '../components/common/Testimonials';

function about() {
  return (
    <>
      <Features type='about' data={featuresLanding} />
      <Banner />
      <BlogPreview />

      <Testimonials />
    </>
  );
}

export default about;
