import Image from 'next/image';
import React from 'react';
import csrImage from '../../images/csr.png';

export default function Features() {
  return (
    <div>
      <div className='mx-auto px-6 xl:container sm:px-12 md:max-w-5xl md:px-24 lg:max-w-none xl:mx-auto 2xl:px-20'>
        <div className='items-center justify-between md:flex'>
          <div className='md:w-1/2 md:pr-8 xl:w-5/12 xl:pr-16'>
            <h1
              role='heading'
              className='text-3xl font-bold leading-tight text-gray-800 sm:text-5xl'
            >
              Why Choose GopherHost?
            </h1>
            <p
              role='contentinfo'
              className='mt-4 mb-10 text-base leading-7 text-gray-600'
            >
              We don't have expensive call centers or customer service
              representitives here to upsell you on products you don't need. We
              want to give you only what you need at the best price.
            </p>
          </div>
          <div className='mt-4  w-full md:mt-0 md:w-1/2 xl:w-2/5'>
            <Image
              src={csrImage}
              alt='woman working'
              width={900}
              height={900}
            />
          </div>
        </div>
        <div className='mt-10  flex flex-wrap  items-center justify-start gap-10 md:mt-16  lg:justify-center '>
          <div>
            <div className='flex items-center'>
              <div className='flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-base font-semibold leading-4 text-white'>
                1
              </div>
              <h2 className='ml-4 text-base font-semibold leading-4 text-gray-800'>
                Extraordinary Performance
              </h2>
            </div>
            <p className='mt-5 w-full max-w-none text-base leading-6 text-gray-600 lg:max-w-sm'>
              Performance is our passion and something you will hear a lot from
              us.
            </p>
          </div>
          <div>
            <div className='flex items-center'>
              <div className='flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-base font-semibold leading-4 text-white'>
                2
              </div>
              <h2 className='ml-4 text-base font-semibold leading-4 text-gray-800'>
                No Long-Term Commitments
              </h2>
            </div>
            <p className='mt-5 w-full max-w-none text-base leading-6 text-gray-600 lg:max-w-sm'>
              Our price is our price, and we don't require you to pay for 3
              years up front.
            </p>
          </div>
          <div>
            <div className='flex items-center'>
              <div className='flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-base font-semibold leading-4 text-white'>
                3
              </div>
              <h2 className='ml-4 text-base font-semibold leading-4 text-gray-800'>
                No Upselling
              </h2>
            </div>
            <p className='mt-5 w-full max-w-none text-base leading-6 text-gray-600 lg:max-w-sm'>
              We don't have commission based sales representatives trying to
              upsell you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
