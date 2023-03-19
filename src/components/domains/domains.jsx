import { FaGlobe } from 'react-icons/fa';

const Domains = () => {
  return (
    <div className='mx-auto max-w-screen-xl py-12 px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-2 gap-8 sm:grid-cols-4'>
        <div className='rounded-lg bg-white shadow-lg'>
          <div className='p-6'>
            <div className='flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white'>
              <FaGlobe className='h-6 w-6' />
            </div>
            <h3 className='mt-4 text-lg font-medium text-gray-900'>.com</h3>
            <p className='mt-3 text-base text-gray-500'>
              The .com domain is the most popular top-level domain (TLD) and is
              used for commercial websites.
            </p>
          </div>
        </div>
        <div className='rounded-lg bg-white shadow-lg'>
          <div className='p-6'>
            <div className='flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white'>
              <FaGlobe className='h-6 w-6' />
            </div>
            <h3 className='mt-4 text-lg font-medium text-gray-900'>.eu</h3>
            <p className='mt-3 text-base text-gray-500'>
              The .eu domain is the top-level domain (TLD) for the European
              Union (EU).
            </p>
          </div>
        </div>
        <div className='rounded-lg bg-white shadow-lg'>
          <div className='p-6'>
            <div className='flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white'>
              <FaGlobe className='h-6 w-6' />
            </div>
            <h3 className='mt-4 text-lg font-medium text-gray-900'>.net</h3>
            <p className='mt-3 text-base text-gray-500'>
              The .net domain is a top-level domain (TLD) used for networking
              websites and is short for "network."
            </p>
          </div>
        </div>
        <div className='rounded-lg bg-white shadow-lg'>
          <div className='p-6'>
            <div className='flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white'>
              <FaGlobe className='h-6 w-6' />
            </div>
            <h3 className='mt-4 text-lg font-medium text-gray-900'>.us</h3>
            <p className='mt-3 text-base text-gray-500'>
              The .us domain is a top-level domain (TLD) for the United States
              of America (USA).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domains;
