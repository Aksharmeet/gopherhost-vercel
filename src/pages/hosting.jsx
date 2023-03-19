import React from 'react';

import { featuresHosting } from '../_mockData/features';
import CallToAction from '../components/common/CallToAction';
import Features from '../components/common/Features';
import Pricing from '../components/common/Pricing';
import Testimonials from '../components/common/Testimonials';
import Hero from '../components/hosting/Hero';
import Support from '../components/hosting/Support';
import Seo from '../components/Seo';

function hosting() {
  return (
    <>
      <Seo templateTitle='Hosting' />
      <Hero />
      <Pricing page='hosting' />
      <Features data={featuresHosting} type='hosting' />
      <Support />
      <Testimonials />
      <CallToAction type='hosting' />
    </>
  );
}

export default hosting;
