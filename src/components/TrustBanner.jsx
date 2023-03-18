import React from 'react';

function TrustBanner() {
  const stats = [
    { id: 1, name: 'Deployed Websites', value: '9000+' },
    { id: 2, name: 'Registered Domains', value: '750+' },
    { id: 3, name: 'Client Satisfactions', value: '99.9%' },
    { id: 4, name: 'Hosted Websites', value: '600+' },
  ];
  return (
    <div className='mx-auto mt-32  sm:mt-56'>
      <div className='relative isolate overflow-hidden bg-gray-900 py-20 px-6  sm:py-40 sm:px-10 lg:py-24 xl:px-24'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0'>
          <div className='lg:row-start-2 lg:max-w-md'>
            <p className='text-base font-semibold leading-8 text-blue-400'>
              Our track record
            </p>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Trusted by thousands of developers worldwide
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-300'>
              We have been providing web hosting services for over 15 years. We
              have a large number of customers from all over the world. We are
              proud of our customers and their trust in us.
            </p>
          </div>

          {/* Gradient Background */}
          <svg
            className='pointer-events-none absolute top-1/2 left-12 -z-10 h-[42.375rem] -translate-y-1/2 transform-gpu blur-3xl lg:top-auto lg:bottom-[-12rem] lg:translate-y-0 lg:transform-gpu'
            viewBox='0 0 1155 678'
            fill='none'
          >
            <path
              fill='url(#c0458c57-1330-459f-9d5c-f0d75c210466)'
              fillOpacity='.25'
              d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
            />
            <defs>
              <linearGradient
                id='c0458c57-1330-459f-9d5c-f0d75c210466'
                x1='1155.49'
                x2='-78.208'
                y1='.177'
                y2='474.645'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#9089FC' />
                <stop offset={1} stopColor='#FF80B5' />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className='mt-10'>
          <dl className='mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4'>
            {stats.map((stat) => (
              <div
                key={stat.id}
                className='flex flex-col gap-y-3 border-l border-white/10 pl-6'
              >
                <dt className='text-sm leading-6'>{stat.name}</dt>
                <dd className='order-first text-3xl font-semibold tracking-tight'>
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default TrustBanner;
