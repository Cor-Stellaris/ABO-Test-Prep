import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ABO Prep — Optician Certification Study App',
  description: 'Prepare for the ABO optician certification exam with practice tests, study materials, and exam simulations.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen bg-[var(--color-background)]">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
