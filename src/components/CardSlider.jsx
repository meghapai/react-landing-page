import React from "react";
import "./CardSlider.css";
import data from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

function CardSlider() {
  return (
    <>
      <div className="card-container">
        <div className="cs1">
          <Slider {...settings}>
            {data.map((d) => (
              <div className="card-body">
                <div className="card-text">
                  <p className="card-name">{d.title}</p>
                  <p style={{ color: "#fff" }}>{d.text}</p>
                  <button className="card-button">Know more</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default CardSlider;
