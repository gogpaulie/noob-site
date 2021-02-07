import React from 'react';
import vidMp4 from '../assets/video2.mp4';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const HeroVideo = () => {
  return (
    <section className='hero-video'>
      <div className='bg-video'>
        <video className='bg-video__content' autoPlay muted loop>
          <source src={vidMp4} type='video/mp4' />
        </video>
      </div>
      <div className='hero-video__title container'>
        <h1>Perpetual Noob Video Productions</h1>
        <p>
          Perpetual Noob Video Productions is a small, locally operated and
          owned company that takes care of all aspects of video production for
          local entrepreneurs and small businesses.
        </p>
      </div>
      <div className='hero-video__cta'>
        <button className='cta cta__primary'>
          <a href='#contact'>request quote</a>
        </button>
        <button className='cta cta__secondary' href='#services'>
          <a href='#work'>See my work</a>
        </button>
      </div>
      <a href='#work' className='showmore-btn'>
        <ExpandMoreIcon />
      </a>
    </section>
  );
};

export default HeroVideo;
