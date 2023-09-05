import { CheckIcon } from '@heroicons/react/20/solid';
import React from 'react';

function Pricing({ page }) {
  const tiers = [
    {
      name: 'Starter Hosting',
      id: 'tier-starter',
      href: 'https://account.gopherhost.com/store/hosting/starter',
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
      href: 'https://account.gopherhost.com/store/hosting/standard',
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
      href: 'https://account.gopherhost.com/store/hosting/managed',
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
    <>
      <div
        className={`py-24 sm:pt-48 ${
          page === 'hosting' &&
          ' bg-gradient-to-r from-[#3ea1db] to-[#5d34ec] text-white'
        }`}
      >
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='max-w-2xl  md:mx-auto lg:max-w-full lg:text-center'>
            <h2
              className={`mx-auto  text-base font-semibold leading-8 ${
                page === 'hosting' ? 'text-white' : 'text-blue-600'
              }`}
            >
              Pricing
            </h2>
            <p
              className={`${
                page === 'hosting' ? 'text-white' : 'text-gray-900'
              } mx-auto mt-2  text-4xl
               font-bold tracking-tight sm:text-5xl`}
            >
              Pricing plans for teams of&nbsp;all&nbsp;sizes
            </p>

            <p
              className={`mx-auto mt-6   text-lg leading-8 lg:max-w-3xl ${
                page === 'hosting' ? 'text-white' : 'text-gray-600'
              }`}
            >
              GopherHost offers a wide variety of hosting plans to meet the
              needs of any type of website. We offer affordable shared hosting,
              managed WordPress hosting, and VPS hosting.
            </p>
          </div>
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
                        tier.mostPopular ? 'text-blue-600' : 'text-gray-900',
                        'text-lg font-semibold leading-8'
                      )}
                    >
                      {tier.name}
                    </h3>
                    {tier.mostPopular ? (
                      <p className='rounded-full bg-blue-600/10 py-1 px-2.5 text-xs font-semibold leading-5 text-blue-600'>
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
                          className='h-6 w-5 flex-none text-blue-600'
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
                      ? 'bg-blue-600 text-white shadow-sm hover:bg-blue-500'
                      : 'text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300',
                    'mt-8 block rounded-md py-2 px-3  text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                  )}
                >
                  Buy plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
