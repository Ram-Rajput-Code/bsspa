import React from "react";

export default function Slider() {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-light slide responsive-slider"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
          <img
           
            src="/images/sliderimg3.jpg"
            className="d-block w-100"
            alt="Slide 1"
            height={"100%"}
          />
          <div className="carousel-caption d-none d-md-block">
            {/* <h5>First Slide</h5>
            <p>Some placeholder content for the first slide.</p> */}
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img
            src="/images/sliderimg2.jpg"
            className="d-block w-100"
            alt="Slide 2"
            height={"100%"}
          />
          <div className="carousel-caption d-none d-md-block">
            {/* <h5>Second Slide</h5>
            <p>Some placeholder content for the second slide.</p> */}
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img
             src="/images/sliderimg1.png"
            className="d-block w-100"
            alt="Slide 3"
            height={"100%"}
          />
          <div className="carousel-caption d-none d-md-block">
            {/* <h5>Third Slide</h5>
            <p>Some placeholder content for the third slide.</p> */}
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
