import Image from 'next/image';

import HeroEarth from '@/images/output-onlinepngtools.png';

import Searchbar from '../../partial components/searchbar';

const Hero = () => {
  return (
    <div className='relative'>
      <div>
        {/* Hero */}
        <div className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
          <svg
            className='relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]'
            viewBox='0 0 1155 678'
          >
            <path
              fill='url(#9b2541ea-d39d-499b-bd42-aeea3e93f5ff)'
              fillOpacity='.3'
              d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
            />
            <defs>
              <linearGradient
                id='9b2541ea-d39d-499b-bd42-aeea3e93f5ff'
                x1='1155.49'
                x2='-78.208'
                y1='.177'
                y2='474.645'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#2563FA ' />
                <stop offset={1} stopColor='#00E5FF' />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className='relative isolate'>
          <div className='mx-auto max-w-7xl py-20  sm:py-20  lg:flex lg:items-center lg:gap-x-10 lg:py-20 lg:px-8'>
            <div className='mx-auto max-w-2xl px-6   lg:mx-0 lg:flex-auto'>
              <div className='items relative flex max-w-fit gap-x-4 rounded-full py-1 px-4 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                <span className='font-semibold text-blue-600'>Simple</span>
                <span className='h-6 w-px bg-gray-900/10' aria-hidden='true' />
                <span className='font-semibold text-blue-600'> Affordable</span>
                <span className='h-6 w-px bg-gray-900/10' aria-hidden='true' />
                <span className='font-semibold text-blue-600'> Fast</span>
              </div>

              <h1 className='mt-5 max-w-lg text-3xl font-extrabold   text-gray-900 sm:text-5xl'>
                The Perfect Place to Host Your Website
              </h1>

              <p className='mt-6 max-w-md text-lg leading-8 text-gray-600'>
                Get your domain name and hosting and get your website online
                quickly and easily.
              </p>
              <div className='mt-10'>
                <Searchbar />
              </div>
            </div>
            <div className='mx-auto mt-16 overflow-hidden sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow'>
              <div
                className='flex  justify-center text-[95vw] md:text-[600px]'
                style={{ transform: 'rotate(-5deg)' }}
              >
                <Image src={HeroEarth} alt='' width={600} height={600} />
              </div>
            </div>
          </div>
        </div>

        {/* Hero */}
      </div>
    </div>
  );
};
export default Hero;
