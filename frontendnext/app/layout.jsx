import '../styles/globals.css'

export const metadata = {
    title: 'Sosew',
    description:
      'bibiotheque de patrons de couture'
  };
  

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
            {children}
        
        </body>
      </html>
    )
  }
