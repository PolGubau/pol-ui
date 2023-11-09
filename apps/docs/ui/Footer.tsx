import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="relative w-full bg-white">
      <div className="container mx-auto flex flex-col space-y-1.5 py-4 items-center justify-center text-sm">
        <p>Copyright © 2023</p>
        <p>Rewind-UI is free and open-source, licensed under MIT.</p>
        <Link href="https://vercel.com?utm_source=[RewindUI]&utm_campaign=oss." target="_blank">
          <Image
            src="/images/powered-by-vercel.svg"
            width={169}
            height={35}
            alt="Powered by Vercel"
            className=""
          />
        </Link>
      </div>
    </footer>
  );
};
