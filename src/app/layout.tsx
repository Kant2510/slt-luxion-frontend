import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { AuthProvider } from '@/contexts/AuthContext';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://luxion.ai'),
  title: 'LUXION — Intelligent Imaging & Vision Systems',
  description:
    'LUXION develops intelligent camera payload systems that enable autonomous machines to see, understand and act.',
  keywords: [
    'LUXION',
    'Intelligent Vision',
    'Camera Payloads',
    'Autonomous Systems',
    'UAV',
    'Robotics',
    'Thermal Imaging',
    'Electro-Optical',
  ],
  authors: [{ name: 'LUXION' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'LUXION — Intelligent Imaging & Vision Systems',
    description:
      'From Light to Intelligence. Next-generation camera payload systems for autonomous machines.',
    url: 'https://luxion.ai',
    siteName: 'LUXION',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUXION — Intelligent Imaging & Vision Systems',
    description:
      'From Light to Intelligence. Next-generation camera payload systems for autonomous machines.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-white text-[#0b1627] selection:bg-accent-blue selection:text-white min-h-screen flex flex-col">
        <AuthProvider>
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}