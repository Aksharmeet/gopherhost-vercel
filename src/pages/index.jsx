import * as React from 'react';

import Hero from '@/components/Hero';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main className='font-nunito e text-base  text-black'>
        <Hero />
      </main>
    </>
  );
}
