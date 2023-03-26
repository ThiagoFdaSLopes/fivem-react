import React from 'react'
import * as Box from './container'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Items from '../Items';
import arrayImgs from '../../utils/imgsArray';

const ContainerSlick: React.FC = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  const newItems = arrayImgs.map((img, index) => (
    <Items img={ img } index={ index }/>
  ))

  return (
    <Box.ContainerBox>
      <Slider {...settings}>
          { newItems }
      </Slider>
    </Box.ContainerBox>
  )
}

export default ContainerSlick