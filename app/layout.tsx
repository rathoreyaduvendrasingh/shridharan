import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shridharan Foundation',
  description: 'The Sub Himalayan Rural Integrative Development of Horticultural and Agricultural Rooted at Namhol (SHRIDHARAN Foundation) is a non-profit organization empowering farmers and marginalized communities in India through free legal aid, advocacy, and education. Addressing issues like land disputes, tenancy rights, and debt relief, the foundation also helps farmers access government schemes, subsidies, and financial assistance. Their mission is to safeguard rights, ensure access to justice, and improve livelihoods by overcoming legal and bureaucratic challenges.',
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

