import * as React from 'react';

import UnstyledLink from './UnstyledLink';
import clsxm from '../../lib/clsxm';

const UnderlineLink = ({ children, className, ...rest }, ref) => {
  return (
    <UnstyledLink
      ref={ref}
      {...rest}
      className={clsxm(
        'animated-underline custom-link inline-flex items-center font-medium',
        'focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        'border-b border-dotted border-dark hover:border-black/0',
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
};

export default UnderlineLink;
