import type { Metadata } from 'next'
import './globals.css'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Tube Trend Generator',
  description: 'Created with Tube Trend',
  generator: 'Tube Trend Generator',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Image src="/logo.png" alt="Tube Trend Logo" width={150} height={150} className="logo" />
          {children}
        </div>
      </body>
    </html>
  )
}
