import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Pokemon App',
  description: 'Search and explore Pokemon using PokeAPI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-blue-600 text-white p-4">
          <Link href="/" className="font-bold text-xl">Home</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
