import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  speed: number;
}
export default function MainSlider({ speed = 500 }: Props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: speed,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      return (
        <div className="main-slider">
          <div className="bg-green-500">
            Speed From Props: <span className="text-2xl">{speed}</span>
          </div>
          <Slider {...settings}>
            <div className="bg-black">
              <h3>1</h3>
            </div>
            <div className="bg-red-500">
              <h3>2</h3>
            </div>
            <div className="bg-amber-100">
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      );
}