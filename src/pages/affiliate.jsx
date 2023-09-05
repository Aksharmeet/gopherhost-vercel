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
      <Seo templateTitle='Affiliate' />
      <main>
        <Hero />
        {/* <div className='mb-[5rem] sm:mb-[15rem]' />
        <Features data={featuresHosting} type='affiliate' />
        <div className='mb-[5rem] sm:mt-[15rem]' /> */}
        {/* <CallToAction /> */}
        {/* <SecondaryFeatures /> */}
        {/* <Testimonials /> */}
      </main>
    </>
  );
}
