import React from 'react';

import Feature from './Feature';
import features from '../../../_mockData/affiliateFeatures';

function FeaturesDesktop() {
  return (
    <div as='div' className='hidden lg:mt-20 lg:block'>
      <>
        <div className='grid grid-cols-3 gap-x-8'>
          {features.map((feature) => (
            <Feature
              key={feature.name}
              feature={{
                ...feature,
                name: (
                  <div className=''>
                    <span className='absolute inset-0' />
                    {feature.name}
                  </div>
                ),
              }}
              className='relative'
            />
          ))}
        </div>
      </>
    </div>
  );
}
export default FeaturesDesktop;
