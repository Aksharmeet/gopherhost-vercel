import React from 'react';

import Hero from '../components/blog/Hero';
import SectionTwo from '../components/blog/sectionTwo';
import Seo from '../components/Seo';

function Blog() {
  return (
    <>
      <Seo templateTitle='Blog' />
      <Hero />

      <SectionTwo />
    </>
  );
}

export default Blog;
