import Link from 'next/link';
import Seo from '../components/Seo';

export default function Contact() {
  return (
    <>
      <Seo templateTitle='Contact' />
      <main className='font-nunito e text-base  text-black'>
        <div className='relative isolate bg-white'>
          <div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2'>
            <div className='relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:py-48 lg:px-8'>
              <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
                {/* background */}
                <div className='absolute inset-x-0  -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
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
                {/* background */}
                <h2 className='text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-5xl sm:leading-[3rem]'>
                  We're Always Happy to Hear from You
                </h2>
                <p className='text-md mt-6 leading-7  text-gray-600 sm:text-lg sm:leading-8'>
                  If you are an existing customer and need assistance, please
                  send a support request. Otherwise fill out the contact form
                  and we will get back to you as soon as we can.
                </p>
              </div>
            </div>
            <div className='relative mb-[10rem]'>
              <form
                action='https://formsubmit.co/c07784dfc2947e1f8b499c4c6cd37f79'
                method='POST'
                className='px-6  pt-0  lg:px-8 lg:pt-20'
              >
                <div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
                  <div className='grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2'>
                    <div className='sm:col-span-2'>
                      <label
                        htmlFor='name'
                        className='block text-sm font-semibold leading-6 text-gray-900 '
                      >
                        First name
                      </label>
                      <div className='mt-2.5'>
                        <input
                          type='text'
                          name='name'
                          id='name'
                          autoComplete='name'
                          placeholder='Name'
                          className='block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                          required
                          minLength={3}
                        />
                      </div>
                    </div>

                    <div className='sm:col-span-2'>
                      <label
                        htmlFor='email'
                        className='block text-sm font-semibold leading-6 text-gray-900'
                      >
                        Email
                      </label>
                      <div className='mt-2.5'>
                        <input
                          type='email'
                          name='email'
                          id='email'
                          autoComplete='email'
                          placeholder='Email'
                          className='block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                          required
                        />
                      </div>
                    </div>

                    <div className='sm:col-span-2'>
                      <label
                        htmlFor='message'
                        className='block text-sm font-semibold leading-6 text-gray-900'
                      >
                        Message
                      </label>
                      <div className='mt-2.5'>
                        <textarea
                          name='message'
                          id='message'
                          rows={4}
                          placeholder='Message'
                          className='block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                          defaultValue=''
                          minLength={10}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className='mt-8'>
                    <button
                      type='submit'
                      className=' w-full rounded-full bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                    >
                      Send message
                    </button>
                  </div>
                </div>
              </form>
              <div className=' mx-auto flex w-full max-w-[637px] flex-col px-6 pt-6 sm:px-8 lg:absolute  lg:right-0 lg:mx-0 lg:max-w-[575px]'>
                <div className='flex items-center'>
                  <div className='mr-5 h-[1px] w-full bg-gray-300' />
                  <p className='text-sm text-gray-500'>or </p>
                  <div className='ml-5 h-[1px] w-full bg-gray-300' />
                  <div />
                </div>
                <Link
                  href='https://gopherhost.com/account/submitticket.php?step=2&deptid=1'
                  target='_blank'
                >
                  <div className='mt-6 flex flex-col justify-end gap-4'>
                    <button className=' border-1-black w-full rounded-full border   px-3.5 py-2.5 text-center text-sm font-semibold  shadow-sm hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                      Open Ticket
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
