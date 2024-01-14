import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import { Providers } from '../components/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Test App',
  description: 'Generated for test',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang='en'>
        <body className={inter.className}>
          <div className='w-full max-w-7xl m-auto'>{children}</div>
        </body>
      </html>
    </Providers>
  );
}
