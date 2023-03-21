import Image from 'next/image';
import React from 'react';

import Cloud from '@/images/cloud.jpg';

import SearchBar from '../../partial components/searchbar';

function Hero() {
  return (
    <section className=' mx-auto w-[100vw] bg-gradient-to-r from-[#3ea1db] to-[#0164FF] py-12  px-3 md:px-0   lg:text-left'>
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
      <div className='mx-auto flex max-w-screen-xl flex-col gap-10  px-4 py-8  lg:flex-row'>
        <div className='mx-auto max-w-xl place-self-center lg:col-span-7'>
          <h1 className='mb-4 max-w-2xl text-5xl font-extrabold leading-none tracking-tight  text-white md:text-5xl xl:text-6xl'>
            It All Starts With A Domain Name
          </h1>
          <p className='mb-6 mt-6 max-w-2xl  text-lg  text-gray-100 lg:mb-8 lg:text-xl'>
            Every great website starts with a great domain name. Check to see if
            your domain name is available.
          </p>

          <SearchBar />
        </div>
        <div className='mx-auto max-w-xl  lg:mt-0 lg:flex'>
          <Image
            src={Cloud}
            width={1000}
            height={400}
            alt=''
            className='rounded-2xl'
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
