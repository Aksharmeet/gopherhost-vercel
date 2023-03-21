import React from 'react';

import Feature from './Feature';
import features from '../../../_mockData/affiliateFeatures';

function FeaturesMobile() {
  return (
    <div className='-mx-4 mt-20 flex flex-col gap-y-0 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden'>
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className='mx-auto max-w-2xl' />
          <div className='relative mt-10 pb-10'></div>
        </div>
      ))}
    </div>
  );
}
export default FeaturesMobile;
