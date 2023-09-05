const SearchBar = () => {
  return (
    <div>
      <label
        htmlFor='default-search'
        className='sr-only mb-2 text-sm font-medium text-gray-900 '
      >
        Search
      </label>
      <div className='relative'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <svg
            aria-hidden='true'
            className='h-5 w-5 text-gray-500 '
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            ></path>
          </svg>
        </div>
        <div className='relative overflow-hidden rounded-lg border border-gray-300 '>
          <form
            action='https://account.gopherhost.com/cart.php?a=add&domain=register'
            method='post'
          >
            <input
              type='text'
              id='default-search'
              name='query'
              size='20'
              className='text-md w-full border-none bg-gray-50 px-4 py-3 pl-5 text-gray-900 focus:border-2 '
              placeholder='Search for domains'
              required
            />
            <button
              type='submit'
              className='absolute right-0 bottom-0 top-0  bg-blue-600 px-7  text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 '
              value='Go'
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
