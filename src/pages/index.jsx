import * as React from 'react';

import Seo from '@/components/Seo';

import BlogPreview from '../components/landing/BlogPreview';
import CallToAction from '../components/landing/CallToAction';
import Features from '../components/landing/Features';
import Hero from '../components/landing/Hero';
import Pricing from '../components/landing/Pricing';
import Testimonials from '../components/landing/Testimonials';
import TrustBanner from '../components/landing/TrustBanner';

export default function HomePage() {
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo templateTitle='Home' />
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
