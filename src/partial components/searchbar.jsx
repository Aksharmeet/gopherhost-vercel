const SearchBar = () => {
  return (
    <form>
      <label
        for='default-search'
        class='sr-only mb-2 text-sm font-medium text-gray-900 '
      >
        Search
      </label>
      <div class='relative'>
        <div class='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <svg
            aria-hidden='true'
            class='h-5 w-5 text-gray-500 '
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            ></path>
          </svg>
        </div>
        <div className='relative overflow-hidden rounded-lg border border-gray-300 '>
          <input
            type='search'
            id='default-search'
            class='text-md w-full border-none bg-gray-50 px-4 py-3 pl-5 text-gray-900 focus:border-2 '
            placeholder='Search for domains'
            required
          />
          <button
            type='submit'
            class='absolute right-0 bottom-0 top-0  bg-blue-600 px-7  text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 '
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
