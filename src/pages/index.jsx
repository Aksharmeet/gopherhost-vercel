import * as React from 'react';

import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Seo from '@/components/Seo';

import BlogPreview from '../components/BlogPreview';
import CallToAction from '../components/CallToAction';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import TrustBanner from '../components/TrustBanner';

export default function HomePage() {
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main className='font-nunito e text-base  text-black'>
        <Hero />
        <Features />
        <TrustBanner />
        <Pricing />
        <CallToAction />
        <BlogPreview />
        <Testimonials />
      </main>
    </>
  );
}
