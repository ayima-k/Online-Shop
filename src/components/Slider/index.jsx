import React from 'react';
import './Slider.scss'
import {AiOutlineArrowRight , AiOutlineArrowLeft} from "react-icons/ai";

const Slider = ({swiperState , setSwiperState}) => {
  const list = [
    {
      id: 1,
      image: 'https://rare-gallery.com/uploads/posts/503280-bakery-bread.jpg'
    },
    {
      id: 2,
      image: 'https://t3.ftcdn.net/jpg/02/52/31/16/360_F_252311651_j4j5znWatcpwsXDzjgPJ0M8DzKD0lkoK.jpg'
    },
    {
      id: 3,
      image: 'https://thumbs.dreamstime.com/z/electronics-promotional-sales-banner-shopping-cart-electronics-devices-promotional-sale-banner-full-shopping-cart-168812806.jpg'
    },
    {
      id: 4,
      image: 'https://i.pinimg.com/736x/c8/c8/f6/c8c8f6a67b4f3402de8c43739a158683--banner-design-awesome-shoes.jpg'
    },
  ]

  const next = () => {
    if(swiperState !== list.length){
      setSwiperState(item => item + 1)
    }else {
      setSwiperState(1)
    }
  }
  const prev = () => {
    if(swiperState !== 1){
      setSwiperState(item => item - 1)
    }else {
      setSwiperState(list.length)
    }
  }

  return (
    <div className='slider'>
      {
        list.map((item , index) => (
          <img
            key={item.id}
            src={item.image}
            className={swiperState === index + 1 ? 'image active' : 'image'}
            alt=""
          />
        ))
      }
      <button
        onClick={next}
        className='right'
      >
        <AiOutlineArrowRight/>
      </button>
      <button
        onClick={prev}
        className='left'
      >
        <AiOutlineArrowLeft/>
      </button>
    </div>
  );
};

export default Slider;