import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';

const bodyFont = Inter({ subsets: ['latin'], variable: '--font-body' });
const displayFont = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Budget Pulse',
  description: 'PWA mobile-first para control financiero diario, mensual y anual.',
  manifest: '/manifest.json',
  themeColor: '#070c18',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Budget Pulse',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${bodyFont.variable} ${displayFont.variable} font-body`}>
        <div className="mx-auto min-h-screen max-w-md px-4 pb-28 pt-4 sm:px-6">
          {children}
        </div>
        <Navbar />
      </body>
    </html>
  );
}