import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import ReactQueryClientProvider from '@/providers/ReactQueryClientProvider'
import Layout from '@/components/layout/Layout'
import './globals.css'

const notoSansKR = Noto_Sans_KR({
  weight: ['300', '500', '700', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'MyReel · leeebug',
  description: '인프런 워밍업 클럽 3기 풀스택 과제 3번 - MyReel',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/pavicon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <ReactQueryClientProvider>
        <body className={`${notoSansKR.className} antialiased w-full overflow-auto`}>
          <Layout>{children}</Layout>
        </body>
      </ReactQueryClientProvider>
    </html>
  )
}
