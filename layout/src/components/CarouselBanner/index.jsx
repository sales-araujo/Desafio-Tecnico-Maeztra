import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImagesBanners } from '../../resources/ImagesBanners.jsx'
import { Arrows } from "../Arrows/index.jsx";
import './styles.css'

export function CarouselBanner(){

  const slickConfigs = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: <Arrows type="prev"/>,
    nextArrow: <Arrows type="next"/>,
    dots: true
  };

  return (
    <section className='sliderBannerContainer'>
      <Slider
        {...slickConfigs}
        className='sliderBannerWrapper'
      > 
        {
          ImagesBanners.map((item, index) => {

            return (
              <div key={ index } className='wrapperBannerHome'>
                <img src={item.image} alt='Banner'/>
                <div className='ctaTextBannerHome'>
                  <h2 className='titleCtaBanner'>Promoções de Outono</h2>
                  <p className='textCtaBanner'>Confiras os melhores looks para combinar com você nesse Outono</p>
                  <button className='btnCtaBanner'>Conferir</button>
                </div>
              </div>
            )
          })
        }
      </Slider>
    </section>
  )
}