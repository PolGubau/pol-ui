import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { config } from '@/lib/config';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
export const metadata: Metadata = {
  metadataBase: new URL('https://dashboard.pol-ui.dev'),
  title: 'Pol/UI - Sample Admin Panel',
  description: 'Effortless interfaces',
  generator: 'Next.js',
  applicationName: 'Pol/UI - Sample Admin Panel',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'UI', 'React component library'],
  authors: [{ name: 'Pol Gubau Amores', url: 'https://polgubau.com' }],
  colorScheme: 'light',
  creator: 'Pol Gubau Amores',
  publisher: 'Pol Gubau Amores',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: {
      default: config.metadata.title,
      template: 'Pol/UI - %s',
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: config.metadata.title,
    description: config.metadata.description,
    images: [config.metadata.ogImage],
    creator: '@PolGubau',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
