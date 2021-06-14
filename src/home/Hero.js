import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-12 pt-2  px-8 bg-white">
      <Slider {...settings}>
        <div className="w-full h-40 sm:h-60 md:h-80 bg-blue-200 rounded-3xl">
          <img
            src="https://www.fluorodine.eu.com/images/home_banner-small.jpg"
            className="w-full rounded-3xl h-full"
          />
        </div>
        <div className="w-full h-40 sm:h-60 md:h-80 bg-gray-200 rounded-3xl">
          <img
            src="https://img.freepik.com/free-vector/sale-banner-with-product-description_1361-1333.jpg?size=626&ext=jpg"
            className="w-full rounded-3xl h-full"
          />
        </div>
        <div className="w-full h-40 sm:h-60 md:h-80 bg-green-200 rounded-3xl">
          <img
            src="https://www.theskinstory.in/media/blog/5-essential-hygiene-products-that-you-must-look-for-during-the-pandemic-banner.jpg"
            className="w-full rounded-3xl h-full"
          />
        </div>
        <div className="w-full h-40 sm:h-60 md:h-80 bg-red-200 rounded-3xl">
          <img
            src="https://cdn.shopify.com/s/files/1/0122/2033/4180/files/Personal_Care_banner.jpg?12209"
            className="w-full rounded-3xl h-full"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
