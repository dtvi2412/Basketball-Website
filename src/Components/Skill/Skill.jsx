import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import database from '../../configFirebase';
import CardSkill from '../CardSkill/CardSkill';
import YouTube from 'react-youtube';

import './Skill.css';
function Skill() {
  const coursesSkill = useSelector(
    (courses) => courses.couresReducer.dataSkill
  );
  const [trailerUrl, setTrailerUrl] = useState('');
  const opts = {
    height: '490',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const dispatch = useDispatch();
  useEffect(() => {
    function fetchCourse() {
      database.collection('Skill').onSnapshot((snapshot) =>
        dispatch({
          type: 'DATA_FIREBASE_SKILL',
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
  const renderListBasket = () => {
    //Check not empty
    if (coursesSkill !== []) {
      return coursesSkill.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <CardSkill
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
      <div className="skill">
        <h1 className="skill__title">Skills</h1>
        <div className="skill__wrap"> {renderListBasket()}</div>
      </div>

      <div className="listVideo__youtube">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Skill;
