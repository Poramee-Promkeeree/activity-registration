import React from 'react';
import videoBg from '../assets/videoBg.mp4';
import './Announcement.css'
import { useEffect } from 'react';


const Main: React.FC = () => {
  useEffect(() => {
    localStorage.removeItem('user')
})
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <h1>TAKE CAMP🌍</h1>
            
            <a className= "myButton" href='http://localhost:3000/Home'>COMMING TO TAKECAMP</a>
        </div>
    </div>
  );
};

export default Main;