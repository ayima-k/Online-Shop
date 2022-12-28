import React from 'react';
import { FaBreadSlice } from "react-icons/fa";
import { FcElectronics } from 'react-icons/fc';
import { GiSonicShoes } from 'react-icons/gi';
import Slider from '../../../components/Slider';
import './About.scss'

const About = () => {
  const [swiperState , setSwiperState] = React.useState(1)

  return (
    <div className='about'>
      <div className='slider_block'>
        <Slider setSwiperState={setSwiperState} swiperState={swiperState}/>
      </div>
      <h1 className='logo'>Our products</h1>
      <div className='cards_container'>
        <div className='cards'>
          <div className='cards_header'>
            <FaBreadSlice/>
          </div>
          <div className='logo'>
            <h1>BREAD</h1>
          </div>
          <div className='text'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem corporis dicta, laborum molestias perspiciatis vel. Inventore ipsa minus nisi pariatur repellat. A deserunt id inventore iste magni nihil possimus.
            </p>
          </div>
        </div>
        <div className='cards'>
          <div className='cards_header'>
            <GiSonicShoes/>
          </div>
          <div className='logo'>
            <h1>SHOES</h1>
          </div>
          <div className='text'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem corporis dicta, laborum molestias perspiciatis vel. Inventore ipsa minus nisi pariatur repellat. A deserunt id inventore iste magni nihil possimus.
            </p>
          </div>
        </div>
        <div className='cards'>
          <div className='cards_header'>
            <FcElectronics/>
          </div>
          <div className='logo'>
            <h1>ELECTRONICS</h1>
          </div>
          <div className='text'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem corporis dicta, laborum molestias perspiciatis vel. Inventore ipsa minus nisi pariatur repellat. A deserunt id inventore iste magni nihil possimus.
            </p>
          </div>
        </div>
      </div>
      <h1 className='logo'>Where we are?</h1>
      <div className='map_container'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d450.79492792354046!2d72.7970324802182!3d40.52889036208306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdad12f404472f%3A0x7a5dcf3fc3370c2b!2sololoOsh!5e0!3m2!1sru!2skg!4v1671388524055!5m2!1sru!2skg"
          width="100%" 
          height="500" 
          style={{border: 0}}
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  );
}

export default About