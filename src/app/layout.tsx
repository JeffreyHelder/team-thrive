import type { Metadata, Viewport } from 'next';
import { Libre_Franklin, Frank_Ruhl_Libre } from 'next/font/google';
import './globals.css';

const sans = Libre_Franklin({
    subsets: ['latin'],
    variable: '--font-sans',
});
const serif = Frank_Ruhl_Libre({
    subsets: ['latin'],
    variable: '--font-serif',
});

export const metadata: Metadata = {
    title: 'Team Thrive Innovations',
    description:
        'Your number one choice for boosting revenue and improving bottom line by analyzing organizational processes, identifying inefficiencies, and implementing strategies to optimize workflow.',
    authors: { name: 'Jeffrey Helder | Tellemore' },
    manifest: '/site.webmanifest.json',
    icons: [
        { rel: 'icon', url: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
        { rel: 'icon', url: '/favicon-16x16.png' },
    ],
    robots: { index: false, follow: false },
};
export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: dark)', color: '#000000' },
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${sans.variable} ${serif.variable}`}>
            <body>{children}</body>
        </html>
    );
}
