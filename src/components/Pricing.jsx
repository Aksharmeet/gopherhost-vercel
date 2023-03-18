import { CheckIcon } from '@heroicons/react/20/solid';
import React from 'react';

function Pricing() {
  const tiers = [
    {
      name: 'Starter Hosting',
      id: 'tier-starter',
      href: '#',
      priceMonthly: '$3.37',
      description: 'Affordable 1 GB hosting account for small websites.',
      features: [
        '1 GB SSD Space',
        '1 Website',
        '512 MB Memory',
        '1 CPU Core',
        'cPanel Access',
      ],
      mostPopular: false,
    },
    {
      name: 'Standard Hosting',
      id: 'tier-standard',
      href: '#',
      priceMonthly: '$5.99',
      description: 'Most popular for small to medium business websites.',
      features: [
        '10 GB SSD Space',
        'Unlimited Websites',
        '1 GB Memory',
        '1 CPU Core',
        'cPanel Access',
      ],
      mostPopular: true,
    },
    {
      name: 'Managed WordPress',
      id: 'tier-managed-wordpress',
      href: '#',
      priceMonthly: '$29.97',
      description: 'Complete hassle-free managed WordPress hosting.',
      features: [
        '20 GB SSD Space',
        'Unlimited Websites',
        '2 CPU Cores',
        '2 GB Memory',
        'Completely Managed',
      ],
      mostPopular: false,
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <div className='py-24 sm:pt-48'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='text-base font-semibold leading-7 text-indigo-600'>
            Pricing
          </h2>
          <p className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            Pricing plans for teams of&nbsp;all&nbsp;sizes
          </p>
        </div>
        <p className='mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600'>
          GopherHost offers a wide variety of hosting plans to meet the needs of
          any type of website. We offer affordable shared hosting, managed
          WordPress hosting, and VPS hosting.
        </p>
        <div className='isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                tierIdx === 0 ? 'lg:rounded-r-none' : '',
                tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
                'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10'
              )}
            >
              <div>
                <div className='flex items-center justify-between gap-x-4'>
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? 'text-indigo-600' : 'text-gray-900',
                      'text-lg font-semibold leading-8'
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className='rounded-full bg-indigo-600/10 py-1 px-2.5 text-xs font-semibold leading-5 text-indigo-600'>
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className='mt-4 text-sm leading-6 text-gray-600'>
                  {tier.description}
                </p>
                <p className='mt-6 flex items-baseline gap-x-1'>
                  <span className='text-4xl font-bold tracking-tight text-gray-900'>
                    {tier.priceMonthly}
                  </span>
                  <span className='text-sm font-semibold leading-6 text-gray-600'>
                    /month
                  </span>
                </p>
                <ul
                  role='list'
                  className='mt-8 space-y-3 text-sm leading-6 text-gray-600'
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className='flex gap-x-3'>
                      <CheckIcon
                        className='h-6 w-5 flex-none text-indigo-600'
                        aria-hidden='true'
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                    : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                  'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                Buy plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
