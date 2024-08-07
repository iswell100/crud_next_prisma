import Navbar from './component/navbar';
import './globals.css'

export const metadata = {
  title: 'Online Judge',
  description: 'Online Judge with Spreadsheet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
