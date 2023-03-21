import Image from 'next/image';

import { generalPosts } from '../../_mockData/blogPage';

export default function Example() {
  return (
    <div className='bg-white py-24 px-6 sm:py-32'>
      <div className='mx-auto max-w-2xl lg:max-w-none  lg:px-8'>
        <div>
          <h2 className='text-3xl tracking-tight text-gray-900 md:text-5xl md:font-bold'>
            Latest Blogs
          </h2>
        </div>
        <div className='mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {generalPosts.map((post) => (
            <article
              key={post.id}
              className='flex flex-col items-start justify-between'
            >
              <div className='relative w-full'>
                <Image
                  src={post.imageUrl}
                  alt=''
                  className='aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]'
                  width={500}
                  height={500}
                />
                <div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10' />
              </div>
              <div className='max-w-xl'>
                <div className='mt-8 flex items-center gap-x-4 text-xs'>
                  <time dateTime={post.datetime} className='text-gray-500'>
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className='relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100'
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className='group relative'>
                  <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                    <a href={post.href}>
                      <span className='absolute inset-0' />
                      {post.title}
                    </a>
                  </h3>
                  <p className='line-clamp-3 mt-5 text-sm leading-6 text-gray-600'>
                    {post.description}
                  </p>
                </div>
                <div className='relative mt-8 flex items-center gap-x-4'>
                  <Image
                    src={post.author.imageUrl}
                    alt=''
                    className='h-10 w-10 rounded-full bg-gray-100'
                    width={20}
                    height={20}
                  />
                  <div className='text-sm leading-6'>
                    <p className='font-semibold text-gray-900'>
                      <a href={post.author.href}>
                        <span className='absolute inset-0' />
                        {post.author.name}
                      </a>
                    </p>
                    <p className='text-gray-600'>{post.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
