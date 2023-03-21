import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const router = useRouter();
  const [switchColor, setSwitchColor] = useState('/');

  useEffect(() => {
    setSwitchColor(router.pathname);
  }, [router]);

  return (
    <Disclosure as='nav'>
      {({ open }) => (
        <>
          <div className='relative z-10  mx-auto max-w-7xl py-5 px-2 sm:px-4 lg:px-8'>
            <div className='flex h-16 justify-between'>
              <div className='flex px-2 lg:px-0'>
                <Link
                  href='/'
                  passHref
                  className='flex flex-shrink-0 items-center'
                >
                  <Image
                    className='block h-8 w-auto lg:hidden'
                    src='https://gopherhost.com/wp-content/uploads/2022/05/logo.svg'
                    alt='Your Company'
                    width={40}
                    height={40}
                  />
                  <Image
                    className='hidden h-8 w-auto lg:block'
                    src='https://gopherhost.com/wp-content/uploads/2022/05/logo.svg'
                    alt='Your Company'
                    width={40}
                    height={40}
                  />
                </Link>
                <div className='hidden lg:ml-6 lg:flex lg:space-x-8'>
                  {/* Current: "border-blue-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Link
                    href='/'
                    className={`inline-flex items-center border-b-2   px-1 pt-1  text-sm font-medium text-gray-900 hover:border-gray-300  
                    ${
                      switchColor === '/'
                        ? ' border-blue-500 text-gray-900'
                        : 'border-transparent text-gray-500'
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    href='/domains'
                    className={`inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium  hover:border-gray-300 hover:text-gray-700 
                    ${
                      switchColor === '/domains'
                        ? ' border-blue-500 text-gray-900'
                        : 'border-transparent text-gray-500'
                    }`}
                  >
                    Domains
                  </Link>
                  <Link
                    href='/hosting'
                    className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium  hover:border-gray-300 hover:text-gray-700   
                    ${
                      switchColor === '/hosting'
                        ? ' border-blue-500 text-gray-900'
                        : 'border-transparent text-gray-500'
                    }`}
                  >
                    Hosting
                  </Link>

                  <Link
                    href='/blog'
                    className={`inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium  hover:border-gray-300 hover:text-gray-700     ${
                      switchColor === '/blog'
                        ? ' border-blue-500 text-gray-900'
                        : 'border-transparent text-gray-500'
                    }`}
                  >
                    Blog
                  </Link>
                  <Link
                    href='/about'
                    className={`inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium  hover:border-gray-300 hover:text-gray-700     ${
                      switchColor === '/about'
                        ? ' border-blue-500 text-gray-900'
                        : 'border-transparent text-gray-500'
                    }`}
                  >
                    About
                  </Link>

                  <Link
                    href='/contact'
                    className={`inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium  hover:border-gray-300 hover:text-gray-700     ${
                      switchColor === '/contact'
                        ? ' border-blue-500 text-gray-900'
                        : 'border-transparent text-gray-500'
                    }`}
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className='flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end'>
                <div className='w-full max-w-lg lg:max-w-xs'>
                  <label htmlFor='search' className='sr-only'>
                    Search
                  </label>
                  <div className='relative'>
                    <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                      <MagnifyingGlassIcon
                        className='h-5 w-5 text-gray-400'
                        aria-hidden='true'
                      />
                    </div>
                    <input
                      id='search'
                      name='search'
                      className='block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                      placeholder='Search'
                      type='search'
                    />
                  </div>
                </div>
              </div>
              <div className='flex items-center lg:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className='absolute top-0 z-10 block h-6 w-6'
                      aria-hidden='true'
                    />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='hidden lg:ml-4 lg:flex lg:items-center'>
                <button
                  type='button'
                  className='flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                >
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button>

                {/* Profile dropdown */}
                <Menu as='div' className='relative ml-4 flex-shrink-0'>
                  <div>
                    <Menu.Button className='flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
                      <span className='sr-only'>Open user menu</span>
                      <Image
                        className='h-8 w-8 rounded-full'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                        width={40}
                        height={40}
                      />
                    </Menu.Button>
                  </div>
                  {/* dropdown */}
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='z-1 absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href='#'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href='#'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href='#'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          {/* Mobile */}
          <Disclosure.Panel className='absolute top-0 z-10 h-[100vh] w-[100%] bg-white lg:hidden'>
            <div className='space-y-1 pt-2 pb-3'>
              <div className=' flex  w-[100%] justify-end py-6 pr-4'>
                <Disclosure.Button className=' rounded-md  p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'>
                  <XMarkIcon className=' block h-6 w-6' aria-hidden='true' />
                </Disclosure.Button>
              </div>

              <Disclosure.Button
                as='a'
                href='/'
                className={`block border-l-4   py-2 pl-3 pr-4 text-base font-medium hover:border-gray-300 hover:bg-gray-50    
                 ${
                   switchColor === '/'
                     ? '   border-blue-500 bg-blue-50 text-blue-700'
                     : 'border-transparent text-gray-600'
                 }`}
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/domains'
                className={`block border-l-4  py-2 pl-3 pr-4 text-base font-medium  hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800   ${
                  switchColor === '/domains'
                    ? '   border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-transparent text-gray-600'
                }`}
              >
                Domains
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/hosting'
                className={`block border-l-4  py-2 pl-3 pr-4 text-base font-medium  hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800   ${
                  switchColor === '/hosting'
                    ? '   border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-transparent text-gray-600'
                }`}
              >
                Hosting
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/blog'
                className={`block border-l-4  py-2 pl-3 pr-4 text-base font-medium  hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800   ${
                  switchColor === '/blog'
                    ? '   border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-transparent text-gray-600'
                }`}
              >
                Blog
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/about'
                className={`block border-l-4  py-2 pl-3 pr-4 text-base font-medium  hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800  ${
                  switchColor === '/about'
                    ? '   border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-transparent text-gray-600'
                }`}
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/contact'
                className={`block border-l-4  py-2 pl-3 pr-4 text-base font-medium  hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800  ${
                  switchColor === '/contact'
                    ? '   border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-transparent text-gray-600'
                }`}
              >
                Contact
              </Disclosure.Button>
            </div>
            <div className='border-t border-gray-200 pt-4 pb-3'>
              <div className='flex items-center px-4'>
                <div className='flex-shrink-0'>
                  <Image
                    className='h-10 w-10 rounded-full'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                    width={40}
                    height={40}
                  />
                </div>
                <div className='ml-3'>
                  <div className='text-base font-medium text-gray-800'>
                    Tom Cook
                  </div>
                  <div className='text-sm font-medium text-gray-500'>
                    tom@example.com
                  </div>
                </div>
                <button
                  type='button'
                  className='ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                >
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
              <div className='mt-3 space-y-1'>
                <Disclosure.Button
                  as='a'
                  href='/your-profile'
                  className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as='a'
                  href='/settings'
                  className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as='a'
                  href='/sign-out'
                  className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
