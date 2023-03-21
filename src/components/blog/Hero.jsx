import SectionOne from './sectionOne';

export default function Hero() {
  return (
    <div className='bg-white'>
      <section className='mx-auto mt-10 bg-gradient-to-r from-blue-600 to-cyan-500 px-6 lg:max-w-7xl xl:rounded-3xl'>
        <SectionOne />
      </section>
    </div>
  );
}
