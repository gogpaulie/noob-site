import React from 'react';
import vid from '../assets/video2.mp4';

// https://coderrocketfuel.com/article/embed-a-youtube-video-in-a-react-webpage
const Work = () => {
  return (
    <section className='Work container' id='work'>
      <h2>My Services</h2>
      <div className='Work__card'>
        <div className='Work__card--video'>
          <video src={vid} controls></video>
        </div>
        <div className='Work__card--info'>
          <h3>Editing</h3>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              cumque?
            </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              perferendis doloribus est?
            </li>
          </ul>
        </div>
      </div>
      <div className='Work__card'>
        <div className='Work__card--info'>
          <h3>Voice Acting</h3>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              cumque?
            </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              perferendis doloribus est?
            </li>
          </ul>
        </div>
        <div className='Work__card--video'>
          <video src={vid} controls></video>
        </div>
      </div>
    </section>
  );
};

export default Work;
