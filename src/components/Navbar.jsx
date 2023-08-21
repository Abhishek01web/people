import React from 'react';
import Logo from '../asset/logo.png';

const Navbar = () => {
  return (
   <>
     <div className='nav'>
        <div className='logo'>
           <img src={Logo} alt={Logo} />
        </div>
        <div className='contact'>
          <a href="mailto:abhishek01web@gmail.com">Contact</a>
        </div>
     </div>
   </>
  )
}

export default Navbar
