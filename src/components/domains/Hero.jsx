import Image from 'next/image';
import React from 'react';

import Cloud from '@/images/cloud.jpg';

function Hero() {
  return (
    <section className=' mx-auto w-[100vw] bg-gradient-to-r from-[#3ea1db] to-[#0164FF] py-12  text-center   lg:text-left'>
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
          <h1 className='mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight  text-white md:text-5xl xl:text-6xl'>
            It All Starts With A Domain Name
          </h1>
          <p className='mb-6 max-w-2xl font-light text-gray-100  md:text-lg lg:mb-8 lg:text-xl'>
            Every great website starts with a great domain name. Check to see if
            your domain name is available.
          </p>

          <form>
            <label
              for='default-search'
              class='sr-only mb-2 text-sm font-medium text-gray-900 '
            >
              Search
            </label>
            <div class='relative'>
              <div class='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                <svg
                  aria-hidden='true'
                  class='h-5 w-5 text-gray-500 '
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  ></path>
                </svg>
              </div>
              <input
                type='search'
                id='default-search'
                class='block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  '
                placeholder='Search for domains'
                required
              />
              <button
                type='submit'
                class='absolute right-2.5 bottom-2.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 '
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className='mx-auto max-w-lg  lg:mt-0 lg:flex'>
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
