import Image from 'next/image';
import { useId } from 'react';

import hosting from '../../images/pointing-down.jpg';
import Container from '../../partial components/Container';

function BackgroundIllustration(props) {
  let id = useId();

  return (
    <div {...props}>
      <svg
        viewBox='0 0 1026 1026'
        fill='none'
        aria-hidden='true'
        className='animate-spin-slow absolute inset-0 h-full w-full'
      >
        <path
          d='M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z'
          stroke='#D4D4D4'
          strokeOpacity='0.7'
        />
        <path
          d='M513 1025C230.23 1025 1 795.77 1 513'
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap='round'
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1='1'
            y1='513'
            x2='1'
            y2='1025'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#06b6d4' />
            <stop offset='1' stopColor='#06b6d4' stopOpacity='0' />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox='0 0 1026 1026'
        fill='none'
        aria-hidden='true'
        className='animate-spin-reverse-slower absolute inset-0 h-full w-full'
      >
        <path
          d='M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z'
          stroke='#D4D4D4'
          strokeOpacity='0.7'
        />
        <path
          d='M913 513c0 220.914-179.086 400-400 400'
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap='round'
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1='913'
            y1='513'
            x2='913'
            y2='913'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#06b6d4' />
            <stop offset='1' stopColor='#06b6d4' stopOpacity='0' />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <div className='lg:pb-30 overflow-hidden py-10 sm:py-10 xl:pb-32'>
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
      <Container>
        <div className='lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20'>
          <div className='  relative z-10 mx-auto mt-0 max-w-xl lg:col-span-7 lg:mt-[7rem] lg:max-w-2xl lg:pt-6 xl:col-span-6'>
            <h1 className='mx-auto max-w-md text-center text-4xl font-medium tracking-tight text-gray-900 md:max-w-xl lg:max-w-none lg:text-left'>
              Fast & Secure Website Hosting Plans
            </h1>
            <p className='mx-auto mt-6 max-w-sm text-center text-lg text-gray-600 md:max-w-xl lg:max-w-none lg:text-left'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore
            </p>
          </div>
          <div className='relative lg:col-span-5 lg:row-span-2 lg:mt-[2rem]'>
            <BackgroundIllustration className='absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0' />

            <div className=' relative mx-auto mt-10 w-[350px] overflow-hidden rounded-3xl lg:mt-0'>
              <Image src={hosting} alt='' width={500} height={400} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
