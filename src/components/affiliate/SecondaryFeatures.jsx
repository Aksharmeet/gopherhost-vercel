import FeaturesDesktop from './affiliateFeatures/FeaturesDesktop';
import FeaturesMobile from './affiliateFeatures/FeaturesMobile';
import Container from '../../partial components/Container';

export function SecondaryFeatures() {
  return (
    <section
      id='secondary-features'
      aria-label='Features for simplifying everyday business tasks'
      className=' sm:pb-50 pt-20 pb-14 sm:pt-32 lg:pb-32'
    >
      <Container>
        <div className='mx-auto max-w-2xl md:text-center'>
          <h2 className='max-w-sm text-3xl font-bold  text-slate-900 sm:max-w-none sm:text-5xl'>
            Our Affiliate Program
          </h2>
          <p className='mt-5 text-lg leading-8 tracking-tight text-slate-700'>
            Sign into your GopherHost account and activate your affiliate
            program to receive a custom link that you can give our to anyone.
            This is a free program and can earn you money by spreading the word
            about how great GopherHost is.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  );
}
