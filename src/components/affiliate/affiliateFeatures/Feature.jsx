import clsx from 'clsx';
import React from 'react';

function Feature({ feature, className, ...props }) {
  return (
    <div className={clsx(className, 'opacity-100')} {...props}>
      <div className={clsx('w-9 rounded-lg', 'bg-blue-600')}>
        <svg aria-hidden='true' className='h-9 w-9' fill='none'>
          <feature.icon />
        </svg>
      </div>
      <h3 className={clsx('mt-6 text-sm font-medium', 'text-blue-600')}>
        {feature.name}
      </h3>
      <p className='font-display mt-2 text-xl text-slate-900'>
        {feature.summary}
      </p>
      <p className='mt-4 text-sm text-slate-600'>{feature.description}</p>
    </div>
  );
}

export default Feature;
