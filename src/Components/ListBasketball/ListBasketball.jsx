import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import database from '../../configFirebase';
import Card from '../Card/Card';
import './ListBasketball.css';
import YouTube from 'react-youtube';
import Loading from "../Loading/Loading";
import movieTrailer from 'movie-trailer';
function ListBasketball() {
  //Get courses in Redux
  const courses = useSelector((courses) => courses.couresReducer.courses);
  const dispatch = useDispatch();

  const [trailerUrl, setTrailerUrl] = useState('');
  const opts = {
    height: '490',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    function fetchCourse() {
      database.collection('basketball').onSnapshot((snapshot) =>
        dispatch({
          type: 'DATA_FIREBASE',
          data: snapshot.docs.map((doc) => doc.data()),
        })
      );
    }
    fetchCourse();
  }, []);
  //Set movie trailer
  const handleClick = (movie) => {
    // console.log('movie', movie.trailer);
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      setTrailerUrl(movie.trailer);
    }
  };

  //   Render basketball
  const renderListBasket = () => {
    //Check not empty
    if (courses !== []) {
      return courses.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <Card
              name={item.name}
              image={item.image}
              handleClick={handleClick}
              movie={item}
            />
          </React.Fragment>
        );
      });
    }
  };
  return (
    <div>
      {courses === [] ? (
        <Loading/>
      ) : (
        <>
          <div className="listVideo">
            <h1 style={{ color: '#9a0b00' }}>Star</h1>
            <div className="listVideo__wrap"> {renderListBasket()}</div>
          </div>
          <div className="listVideo__youtube">
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
          </div>
        </>
      )}
    </div>
  );
}

export default ListBasketball;
