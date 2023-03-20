import React from 'react';

export default function index() {
  return (
    <div className='my-20'>
      <div className='pb-20'>
        <div className='mx-auto  bg-gradient-to-l from-blue-600 to-blue-700'>
          <div className='container mx-auto flex w-full flex-col items-center justify-center'>
            <div className='container mx-auto  gap-10 py-20  px-10 md:block'>
              <h2 className=' mb-10 text-center text-5xl font-black leading-10  text-white md:mb-10 md:text-6xl lg:mb-20 lg:text-6xl'>
                Growth Statistics
              </h2>
              <div className=' mx-auto grid max-w-md  grid-cols-2 gap-10 md:max-w-4xl  md:grid-cols-4 '>
                <div className='flex  h-48 w-44 flex-col items-center  justify-center rounded-2xl border border-white shadow '>
                  <h2 className='text-center text-3xl font-extrabold leading-10 text-white md:text-4xl lg:text-5xl'>
                    25+
                  </h2>
                  <p className='text-md mt-4 text-center leading-none text-white md:text-base lg:text-lg'>
                    Awards Won
                  </p>
                </div>
                <div className='flex  h-48 w-44 flex-col items-center  justify-center rounded-2xl border border-white shadow '>
                  <h2 className='text-center text-3xl font-extrabold leading-10 text-white md:text-4xl lg:text-5xl'>
                    25+
                  </h2>
                  <p className='text-md mt-4 text-center leading-none text-white md:text-base lg:text-lg'>
                    Awards Won
                  </p>
                </div>
                <div className='flex  h-48 w-44 flex-col items-center  justify-center rounded-2xl border border-white shadow '>
                  <h2 className='text-center text-3xl font-extrabold leading-10 text-white md:text-4xl lg:text-5xl'>
                    25+
                  </h2>
                  <p className='text-md mt-4 text-center leading-none text-white md:text-base lg:text-lg'>
                    Awards Won
                  </p>
                </div>
                <div className='flex  h-48 w-44 flex-col items-center  justify-center rounded-2xl border border-white shadow '>
                  <h2 className='text-center text-3xl font-extrabold leading-10 text-white md:text-4xl lg:text-5xl'>
                    25+
                  </h2>
                  <p className='text-md mt-4 text-center leading-none text-white md:text-base lg:text-lg'>
                    Awards Won
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
