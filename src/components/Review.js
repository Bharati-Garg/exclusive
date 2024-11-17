import Slider from "react-slick";
import reviewSliderData from "../utils/reviewSliderData";
import ReviewSliderContent from "./ReviewSliderContent";

const Review = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <Slider {...settings}>
              {reviewSliderData.map((value, index) => (
                <ReviewSliderContent item={value} key={index} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
