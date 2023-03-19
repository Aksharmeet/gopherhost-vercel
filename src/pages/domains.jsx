import React from 'react';

import Testimonials from '../components/common/Testimonials';
import Domains from '../components/domains/domains';
import Hero from '../components/domains/Hero';
import Seo from '../components/Seo';

function domains() {
  return (
    <>
      <Seo templateTitle='Domains' />
      <Hero />
      <Domains />
      <Testimonials />
    </>
  );
}

export default domains;
