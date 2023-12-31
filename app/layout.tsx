import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import ModalProvider from '@/providers/modal-provider'
import { ToasterProvider } from '@/providers/toast-provider'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MyStore',
  description: 'My Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={urbanist.className}>
        <ModalProvider />
        <ToasterProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
