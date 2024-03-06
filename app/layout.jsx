import { Inter } from 'next/font/google'
import { Footer } from './components/footer/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Square+Next.js',
  description: 'Square + Next.js example'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
