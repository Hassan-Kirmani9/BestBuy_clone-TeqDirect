import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="/h11.png" alt="" />
      </div>
      <div>
        <img src="/h22.png" alt="" />
      </div>
      <div>
        <img src="/h33.png" alt="" />
      </div>
      <div>
        <img src="/h44.png" alt="" />
      </div>
    </Slider>
  );
};

export default ImageSlider;
