import Footer from './Footer'
import Header from './Header'
import {Outlet} from 'react-router'

function RootLayout() {
  return (
    <div>
      <Header />
      <div className='min-h-screen mx-20 p-20 bg-gray-100'>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default RootLayout