import './globals.css';

export const metadata = {
  title: 'संयंत्र निगरानी',
  description: 'ETP, WTP और STP संयंत्रों की रीडिंग',
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
