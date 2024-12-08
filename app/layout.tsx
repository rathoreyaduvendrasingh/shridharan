import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EcoFarm NGO',
  description: 'Promoting sustainable farming practices and supporting local farmers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow pt-16 pb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

