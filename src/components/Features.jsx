import {
  AdjustmentsVerticalIcon,
  ArrowPathIcon,
  LockClosedIcon,
  PresentationChartBarIcon,
} from '@heroicons/react/20/solid';
import React from 'react';

function Features() {
  const features = [
    {
      name: 'Low Cost, High Performance',
      description: 'Fastest Hosting accounts and incredibly affordable prices.',
      icon: PresentationChartBarIcon,
    },
    {
      name: 'Secure Network & Best Servers',
      description:
        'Our secure network and latest high-end servers makes websites happy!',
      icon: LockClosedIcon,
    },
    {
      name: 'Free Setup & No Hidden Fees',
      description:
        'No setup fees, not long term commitments, no contracts -- we are here for you.',
      icon: AdjustmentsVerticalIcon,
    },
    {
      name: '60 Day Money Back Guarantee',
      description:
        'No questions asked money-back guarantee if you are unhappy for any reason.',
      icon: ArrowPathIcon,
    },
  ];
  return (
    <div className='sm:mt-30 mx-auto mt-20 max-w-7xl px-6 lg:px-8'>
      <div className='mx-auto max-w-2xl lg:text-center'>
        <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900  sm:text-4xl'>
          Why Choose GopherHost?
        </p>
        <p className='mt-6 text-lg leading-8 text-gray-600'>
          GopherHost is a small business that really cares about their
          customers.
        </p>
      </div>
      <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
        <dl className='grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
          {features.map((feature) => (
            <div key={feature.name} className='relative pl-16'>
              <dt className='text-base font-semibold leading-7 text-gray-900'>
                <div className='absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600'>
                  <feature.icon
                    className='h-6 w-6 text-white'
                    aria-hidden='true'
                  />
                </div>
                {feature.name}
              </dt>
              <dd className='mt-2 text-base leading-7 text-gray-600'>
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default Features;
