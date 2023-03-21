import { featuresHosting } from '../_mockData/features';
import { Hero } from '../components/affiliate/Hero';
import { SecondaryFeatures } from '../components/affiliate/SecondaryFeatures';
import CallToAction from '../components/common/CallToAction';
import Features from '../components/common/Features';
import Testimonials from '../components/common/Testimonials';
import Seo from '../components/Seo';

export default function Home() {
  return (
    <>
      <Seo templateTitle='Seo' />
      <main>
        <Hero />
        <div className='mb-[15rem]' />
        <Features data={featuresHosting} type='affiliate' />
        <div className='mt-[15rem]' />
        <CallToAction />
        <SecondaryFeatures />
        <Testimonials />
      </main>
    </>
  );
}
