import Image from 'next/image';

import backgroundImage from '../../images/background-call-to-action.jpg';
import Button from '../../partial components/Button';
import Container from '../../partial components/Container';

export default function CallToAction() {
  return (
    <section
      id='get-started-today'
      className='relative overflow-hidden bg-blue-600 py-32'
    >
      <Image
        className='absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2'
        src={backgroundImage}
        alt=''
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className='relative'>
        <div className='mx-auto max-w-lg text-center'>
          <h2 className='font-display text-3xl tracking-tight text-white sm:text-4xl'>
            We work when you work.
          </h2>
          <p className='mt-4 text-lg tracking-tight text-white'>
            Do you have a comment, question or need support. Please contact us
            and we will do our best to return your request in a timely fashion.
          </p>
          <Button href='/register' color='white' className='mt-10'>
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
