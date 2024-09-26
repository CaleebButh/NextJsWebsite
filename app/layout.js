import "./globals.css";
import Head from 'next/head'

export const metadata = {
  title: "Website Portfolio",
  description: "Portfolio Website design",
};

export default function RootLayout({children}){
  return(
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/jpg" href="./images/favicon.png" />
        </head>
      <body>{children}</body>
    </html>
  );
}
