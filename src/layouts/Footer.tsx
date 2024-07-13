import Link from 'next/link';

import IconGithub from '@/components/icon/Github';
import IconLinkedin from '@/components/icon/LinkedIn';

export const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center gap-4 pb-16 pt-20 text-center'>
      <div className='flex justify-center gap-4'>
        <Link href='https://github.com/osohyun0224' target='_blank'>
          <IconGithub
            className='fill-foreground transition hover:fill-blue-600'
            height={30}
            width={30}
          />
        </Link>
        <Link href='https://www.linkedin.com/in/osohyun0224/' target='_blank'>
          <IconLinkedin
            className='fill-foreground transition hover:fill-blue-600'
            height={30}
            width={30}
          />
        </Link>
      </div>
      <div>
        © 2024. <span className='font-semibold'>Sohyun Oh</span> all rights reserved.
      </div>
    </footer>
  );
};
