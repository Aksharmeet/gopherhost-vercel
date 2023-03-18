import clsx from 'clsx';
import React from 'react';

import StarIcon from './StartIcon';

export default function StarRating({ rating }) {
  return (
    <div className='flex'>
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-cyan-500' : 'fill-gray-300'
          )}
        />
      ))}
    </div>
  );
}
