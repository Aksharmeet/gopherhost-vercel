import Link from 'next/link';

export default function Example() {
  return (
    <div className='mx-2 text-center md:mx-20'>
      <div className='mx-auto mt-[10rem] flex max-w-3xl items-center gap-x-6 rounded-full border border-black py-2.5 px-6 sm:px-3.5 sm:before:flex-1'>
        <p className='text-sm leading-6 '>
          <Link href='/contact'>
            <strong className='font-semibold'>Gopherhost 2023</strong>
            <svg
              viewBox='0 0 2 2'
              className='mx-2 inline h-0.5 w-0.5 fill-current'
              aria-hidden='true'
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            Contact us for more information
            <span aria-hidden='true' className='ml-2'>
              &rarr;
            </span>
          </Link>
        </p>
        <div className='flex flex-1 justify-end'>
          <button
            type='button'
            className='-m-3 p-3 focus-visible:outline-offset-[-4px]'
          >
            <span className='sr-only'>Dismiss</span>
          </button>
        </div>
      </div>
    </div>
  );
}
