import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Arrows } from "../Arrows";
import { CollectionProductHighlights } from "../../resources/CollectionProductHighlights.jsx"
import { ShelfProducts } from "./ShelfProducts/index.jsx"
import s from './styles.module.css'

export function ShowCaseProduct(){

  const slickConfigs = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: true,
    cssEase: "linear",
    prevArrow: <Arrows type="prev"/>,
    nextArrow: <Arrows type="next"/>,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  };

  return (
    <section className={s.containerShowCase}>
      <h2>as mais pedidas</h2>
      <Slider
        {...slickConfigs}
        className={s.containerProducts}
      >
        {
          CollectionProductHighlights.map((item, index) => {
            return (
              <div key={index} className={s.shelfProducts}>
                <ShelfProducts 
                  item={item}
                />
              </div>
            )
          })
        }
      </Slider>
    </section>
  )
}