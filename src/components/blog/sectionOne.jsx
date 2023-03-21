import Image from 'next/image';

import { featuredPost, posts } from '../../_mockData/blogPage';

export default function SectionOne() {
  return (
    <div className='relative  py-24 sm:py-32'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8'>
        <article className='mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg'>
          <time
            dateTime={featuredPost.datetime}
            className='block text-sm leading-6 text-white'
          >
            {featuredPost.date}
          </time>
          <h2
            id='featured-post'
            className='mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl'
          >
            {featuredPost.title}
          </h2>
          <p className='mt-4 text-lg leading-8 text-white'>
            {featuredPost.description}
          </p>
          <div className='mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col'>
            <div className='flex'>
              <a
                href={featuredPost.href}
                className='text-sm font-semibold leading-6 text-white'
                aria-describedby='featured-post'
              >
                Continue reading <span aria-hidden='true'>&rarr;</span>
              </a>
            </div>
            <div className='flex lg:border-t lg:border-gray-100/40 lg:pt-8'>
              <a
                href={featuredPost.author.href}
                className='flex gap-x-2.5 text-sm font-semibold leading-6 text-white'
              >
                <div className='h-6 w-6 flex-none overflow-hidden rounded-full bg-gray-50'>
                  <Image
                    src={featuredPost.author.imageUrl}
                    alt=''
                    width={24}
                    height={24}
                  />
                </div>
                {featuredPost.author.name}
              </a>
            </div>
          </div>
        </article>

        <div className='mx-auto w-full max-w-2xl border-t border-gray-100 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0'>
          <div className='-my-12 divide-y divide-gray-100/50'>
            {posts.map((post) => (
              <article key={post.id} className='py-12'>
                <div className='group relative max-w-xl'>
                  <time
                    dateTime={post.datetime}
                    className='block text-sm leading-6 text-white'
                  >
                    {post.date}
                  </time>
                  <h2 className='mt-2 text-lg font-semibold text-white '>
                    <a href={post.href}>
                      <span className='absolute inset-0' />
                      {post.title}
                    </a>
                  </h2>
                  <p className='mt-4 text-sm leading-6 text-white'>
                    {post.description}
                  </p>
                </div>
                <div className='mt-4 flex'>
                  <a
                    href={post.author.href}
                    className='relative flex gap-x-2.5 text-sm font-semibold leading-6 text-white'
                  >
                    <div className=' h-6 w-6 flex-none overflow-hidden rounded-full bg-gray-50'>
                      <Image
                        src={post.author.imageUrl}
                        alt=''
                        width={32}
                        height={32}
                      />
                    </div>
                    {post.author.name}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
