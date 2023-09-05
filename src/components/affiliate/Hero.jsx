import Button from '../../partial components/Button';
import Container from '../../partial components/Container';

export function Hero() {
  return (
    <Container className='pt-20 pb-16 sm:text-center lg:pt-32'>
      <h1 className='font-display mx-auto max-w-4xl text-3xl font-bold  text-slate-900 sm:text-7xl'>
        Our Affiliate Plan
      </h1>
      <p className='mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700'>
        GopherHost is proud to announce the launching of its affiliate program.
        Signing up your friends and family with your custom affiliate link will
        earn you cash!
      </p>
      <div className='mt-10 flex gap-x-6 sm:justify-center'>
        <Button
          href='https://account.gopherhost.com/affiliates.php'
          className='w-full max-w-lg py-3'
        >
          Earn Money with Gopherhost
        </Button>
      </div>
    </Container>
  );
}
