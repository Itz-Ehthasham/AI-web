import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storageTheme = localStorage.getItem('theme');
                const root = document.documentElement;
                if (storageTheme === 'dark') {
                  root.classList.add('dark');
                } else {
                  root.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
