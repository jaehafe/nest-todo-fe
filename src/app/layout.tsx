// import './globals.css';
import GlobalStyle from '@/styles/reset';
import ThemeProviders from '@/components/Providers/ThemeProviders';
import ExtraProviders from '@/components/Providers/ExtraProviders';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body suppressHydrationWarning={true}>
        <GlobalStyle />
        <ExtraProviders>
          <ThemeProviders>{children}</ThemeProviders>
        </ExtraProviders>
      </body>
    </html>
  );
}
