import './globals.css';

export const metadata = {
  title: 'Thesardauna TV News',
  description: 'Trusted news from Nigeria and beyond – Thesardauna TV',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
