import React, { useEffect, useState } from 'react';
import './Header.css';
function Header() {
  const [background, setBackground] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
  }, []);
  const handleBacktoTop = () => window.scrollTo(0, 0);
  return (
    <header className={`${background ? 'headerScroll' : 'header'}`}>
      <div className="header__logo">
        <img
          onClick={() => handleBacktoTop()}
          // src="https://png.pngitem.com/pimgs/s/234-2347341_no-idea-sports-logo-for-basketball-png-transparent.png"
          src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.15752-0/cp0/q90/p64x64/78953789_462451701079207_8657290262000697344_n.jpg?_nc_cat=107&ccb=2&_nc_sid=02e273&_nc_ohc=oZTH0X5Z0OIAX-2TxeH&_nc_ht=scontent-sin6-1.xx&tp=27&oh=f71b9e72d3ff41dc53903677d1e2f477&oe=5FDC1572"
          alt="logo"
        />
        <h1 onClick={() => handleBacktoTop()} className="header__brandName">
          NO HOPE
        </h1>
      </div>
    </header>
  );
}

export default Header;
