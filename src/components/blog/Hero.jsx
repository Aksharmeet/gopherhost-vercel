export default function Hero() {
  return (
    <div className='bg-white'>
      <section className='mx-auto mt-10 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 px-10 lg:max-w-7xl'>
        <div className='mx-auto   px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0'>
          <div className='mx-auto mr-auto place-self-center'>
            <h1 className='mx-auto max-w-2xl pt-5 text-center text-3xl font-bold dark:text-white md:text-4xl xl:text-5xl'>
              Insightful Articles & Tips
            </h1>
            <h1 className='mx-auto mb-3 max-w-2xl pb-5 pt-3 text-center text-3xl font-bold dark:text-white md:text-4xl xl:text-5xl'>
              to Grow Your Online Presence
            </h1>
            <p className='mx-auto mb-6 max-w-2xl text-center font-light text-gray-100 dark:text-gray-200 md:text-lg lg:mb-8 lg:text-xl'>
              Stay Up-to-Date with GropherHost's Blog on Web Hosting, Website
              Building, and Online Marketing
            </p>
          </div>
          <div className='hidden lg:col-span-5 lg:mt-0 lg:flex'></div>
        </div>
      </section>
    </div>
  );
}
