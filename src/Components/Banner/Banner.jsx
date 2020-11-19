import React from 'react';
import { useSelector } from 'react-redux';
import './Banner.css';
function Banner() {
  const coursesStars = useSelector((peoples) => peoples.couresReducer.courses);

  const random = Math.floor(Math.random() * coursesStars?.length);

  return (
    <div
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("${coursesStars[random]?.image}")`,
        // backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{coursesStars[random]?.name}</h1>
      </div>
      <div className="banner-fadeBottom" />
    </div>
  );
}

export default Banner;
