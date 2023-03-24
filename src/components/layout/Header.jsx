import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Button from '../../partial components/Button';

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
          <div className='relative z-10  mx-auto flex max-w-7xl justify-between py-5 px-2 sm:px-4 lg:px-8'>
            <div className='flex h-16  justify-between'>
              <div className='flex justify-between px-2 lg:px-0'>
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
                <div className=' absolute right-6 top-10 hidden lg:flex lg:space-x-8'>
                  {/* Current: "border-blue-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Link
                    href='/'
                    className={`inline-flex items-center border-b-2   px-1 pt-1  text-sm font-medium  hover:border-gray-300  
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
                  <Link
                    href='/affiliate'
                    className={`inline-flex items-center border-b-2   px-1 pt-1  text-sm font-medium  hover:border-gray-300  
                    ${
                      switchColor === '/affiliate'
                        ? ' border-blue-500 text-gray-900'
                        : 'border-transparent text-gray-500'
                    }`}
                  >
                    Affiliate
                  </Link>
                  <Link
                    target='_blank'
                    href='https://account.gopherhost.com/login'
                  >
                    <Button className='px-[30px]'> Login</Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Mobile menu button */}
            <div className='flex items-center lg:hidden'>
              <span className='sr-only'>Open main menu</span>
              {open ? (
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'>
                  <XMarkIcon
                    className='absolute top-0 z-10 block h-6 w-6'
                    aria-hidden='true'
                  />
                </Disclosure.Button>
              ) : (
                <div className='flex items-center gap-2'>
                  <Disclosure.Button className='focus:ring-2 focus:ring-inset focus:ring-blue-500'>
                    <div
                      target='_blank'
                      href='https://account.gopherhost.com/login'
                      className='rounded-md bg-black px-[15px] py-[5px] text-sm text-white'
                    >
                      Login
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'>
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  </Disclosure.Button>
                </div>
              )}
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
              <Disclosure.Button
                as='a'
                href='/affiliate'
                className={`block border-l-4  py-2 pl-3 pr-4 text-base font-medium  hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800  ${
                  switchColor === '/affiliate'
                    ? '   border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-transparent text-gray-600'
                }`}
              >
                Affiliate
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
