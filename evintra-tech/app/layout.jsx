import './globals.css'
import Header from './header'
import Footer from './footer/page'

export const metadata = {
  title: 'Evintra-Tech - Innovative Technology Solutions',
  description: 'Leading technology company providing cutting-edge solutions for your business needs',
}

export default function RootLayout({ children }) {
return (
<html lang="en">
<body>
<Header/>
{children}
<Footer/>
</body>
</html>
);
}