import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StaticImage } from "gatsby-plugin-image";

const Carousel = () => {
  const settings = {
    dots: true,
    arrows: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // dotsClass: 'carousel-bullet',
  };

  return (
    <>
      <Slider {...settings}>
        <div className="container m-auto max-h-screen md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
            <div className="m-10 md:m-auto">
              <h1 className="my-4 text-4xl font-bold leading-tight">Hello, I'm Julius Githaiga.</h1>
              <p className="leading-normal mb-8">
                I provide professional software (web and mobile applications) development services.
              </p>
            
              <div className="mt-10">
                <a href="https://www.thirdriver.io/contact-us" className="action-button">Hire Me</a>
              </div>            
            </div>
            <div className="m-10 md:m-auto">
              <StaticImage
                src="../images/undraw_programming.svg"
                alt="software development image"
                quality={95}
              />         
            </div>
          </div>          
        </div>

        <div className="container m-auto max-h-screen md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
            <div className="m-10 md:m-auto">
              <h1 className="my-4 text-4xl font-bold leading-tight">Web Applications Development</h1>
              <p className="leading-normal mb-8">
                I build fast-loading, highly optimized experiences that will work across a wide range of devices. 
                Responsive design and development is emphasized in every step.
              </p>
            </div>
            <div className="m-10 md:m-auto">
              <StaticImage
                src="../images/undraw_progressive_app.svg"
                alt="software development image"
                quality={95}
              />
            </div>
          </div>          
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
            <div className="m-10 md:m-auto">
              <h1 className="my-4 text-4xl font-bold leading-tight">Mobile Applications Development</h1>
              <p className="leading-normal mb-8">
                I work with my clients to build robust, award-winning cross platform mobile solutions. 
                The mobile apps I develop work seemslessly on both Android and iOS.
              </p>
            </div>
            <div className="m-10 md:m-auto">
              <StaticImage
                src="../images/undraw_App_wireframe.svg"
                alt="software consulting image"
                quality={95}
              />
            </div>
          </div>          
        </div>
      </Slider>
      <p className="my-5"></p>
    </>
  );
}

export default Carousel;
