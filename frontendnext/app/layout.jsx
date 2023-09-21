import '../styles/globals.css'
import MenuContextProvider from 'context/MenuContext';

export const metadata = {
    title: 'Sosew',
    description:
      'bibiotheque de patrons de couture'
  };
  

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
        <MenuContextProvider>
            {children}
            </MenuContextProvider>
        </body>
      </html>
    )
  }
