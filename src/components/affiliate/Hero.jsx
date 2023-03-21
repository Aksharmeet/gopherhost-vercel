import LogoLaravel from '../../images/logos/laravel';
import LogoMirage from '../../images/logos/mirage';
import LogoStatamic from '../../images/logos/statamic';
import LogoStaticKit from '../../images/logos/statickit';
import LogoTransistor from '../../images/logos/transistor';
import LogoTuple from '../../images/logos/tuple';
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
        <Button href='/register' className='w-full max-w-lg py-3'>
          Earn Money with Gopherhost
        </Button>
      </div>
      <div className='mt-36 lg:mt-44'>
        <p className='font-display  text-center text-base text-slate-900'>
          Trusted by these six companies so far
        </p>
        <ul
          role='list'
          className='mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0'
        >
          {[
            [
              { name: 'Transistor', logo: <LogoTransistor /> },
              { name: 'Tuple', logo: <LogoTuple /> },
              { name: 'StaticKit', logo: <LogoStaticKit /> },
            ],
            [
              { name: 'Mirage', logo: <LogoMirage /> },
              { name: 'Laravel', logo: <LogoLaravel /> },
              { name: 'Statamic', logo: <LogoStatamic /> },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role='list'
                className='flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0'
              >
                {group.map((company) => (
                  <li key={company.name} className='flex'>
                    {company.logo}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
