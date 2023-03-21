import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <div className='container relative mx-auto  py-7 px-6 md:px-2 xl:px-0'>
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
        <div className='grid items-center pb-40 md:grid-cols-1  md:gap-10 lg:grid-cols-2 xl:grid-cols-2'>
          <div className='mx-auto max-w-none   sm:px-0 md:max-w-2xl'>
            <h1 className=' mb-4 mt-2 max-w-3xl text-4xl  font-bold   text-gray-800 md:mx-0 md:max-w-none md:text-5xl lg:mt-4 lg:w-10/12  lg:text-5xl xl:text-6xl'>
              Get to know us
            </h1>

            <h2 className='mt-2 max-w-3xl text-lg leading-8 text-gray-800  md:mx-0 md:mt-5 md:max-w-3xl  lg:mt-6 lg:w-10/12'>
              Gropherhost is a hosting platform that provides a wide range of
              services to help you build your website. We are a team of
              professionals who are passionate about web development and
              technology. We are committed to providing you with the best
              services and support.
            </h2>
          </div>
          <div className='custom-height  relative mx-auto mt-[3rem] flex w-full justify-center rounded-3xl md:mt-0 md:min-w-[25rem]'>
            <Image
              src='https://i.ibb.co/dLsYS9C/Group-1.png'
              alt='Collage of images'
              role='img'
              width={600}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
}
