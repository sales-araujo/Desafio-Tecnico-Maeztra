import bannerHome from '../../assets/images/banner-home.png'
import s from './styles.module.css'

export function BannerHome(){
  return (
    <section className={s.containerInfoBanner}>
      <div className={s.contentInfoBanner}>
        <h2>Lorem ipsum</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien.</p>
      </div>
      <div className={s.bannerHome}>
        <img src={bannerHome} alt="Banner" />
      </div>
    </section>
  )
}