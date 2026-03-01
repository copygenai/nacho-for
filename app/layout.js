import './globals.css'

export function generateMetadata() {
  return {
    title: 'Ignacio Arsuaga — Job Application',
    description: 'A personalized application page',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
