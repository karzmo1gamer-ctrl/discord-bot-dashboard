import './globals.css';
import { Providers } from '@/components/Providers';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'BotVerse | Dashboard',
  description: 'لوحة تحكم احترافية للبوت',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
