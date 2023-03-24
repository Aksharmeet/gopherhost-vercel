import * as React from 'react';

// data
import { featuresLanding } from '../_mockData/features';

import CallToAction from '../components/common/CallToAction';
import Features from '../components/common/Features';
import Pricing from '../components/common/Pricing';
import Testimonials from '../components/common/Testimonials';
import Hero from '../components/landing/Hero';
import TrustBanner from '../components/landing/TrustBanner';
import Seo from '../components/Seo';

export default function HomePage() {
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo templateTitle='Home' />
      <main className='font-nunito e text-base  text-black'>
        <Hero />
        <Features data={featuresLanding} type='landing' />
        <TrustBanner />
        <Pricing page='landing' />
        <CallToAction type='landing' />
        <Testimonials />
      </main>
    </>
  );
}
