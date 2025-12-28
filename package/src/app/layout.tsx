import "./global.css";
import ClientProviders from './ClientProviders';
import ClientOnly from './ClientOnly';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        <title>Health Dashboard</title>
      </head>
      <body suppressHydrationWarning={true}>
        <ClientProviders>
          <ClientOnly>
            {children}
          </ClientOnly>
        </ClientProviders>
      </body>
    </html>
  );
}
