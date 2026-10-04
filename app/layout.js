import './globals.css';

const title = "Manisha Chakraborty | Welcome to my little corner of the globe";
const description =
  'CS at Arizona State (4.0). AI engineer shipping agentic RAG systems to production at Precisely and ASU Enterprise Technology. Seeking Summer 2027 AI/ML, SWE and AI PM internships.';

export const metadata = {
  title,
  description,
  metadataBase: new URL('https://manisha-chakraborty.vercel.app'),
  openGraph: { title, description, type: 'website' },
  twitter: { card: 'summary', title, description },
};

const themeScript = `try{var m=localStorage.getItem('motion');if(m)document.documentElement.dataset.motion=m}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400;1,9..144,500&family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
