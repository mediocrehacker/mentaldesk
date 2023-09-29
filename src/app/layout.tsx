import './global.scss';
import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import Navbar from './components/Navbar'
import { Footer } from './Footer'
import Script from 'next/script';
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['cyrillic'],
  display: 'swap',
})

export const metadata = {
  title: 'Mental Desk',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(options)

  return (
    <html lang="ru" className={inter.className}>
      <body>
      <div id="app">
        <Navbar user={session?.user} />
        <main className="wrapper ">
          {children}
        </main>
        <Footer />
      </div>
      <Script id="yandex-metrica" strategy="afterInteractive">
      {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(94751413, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true
        });`
      }
      </Script>
      </body>
    </html>
  )
}

