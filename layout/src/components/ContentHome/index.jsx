import s from './styles.module.css'
import { CarouselBanner } from "../CarouselBanner"
import { ShowCaseProduct } from "../ShowCaseProduct"
import { BannerHome } from '../BannerHome'
import { Brands } from '../Brands'
import { BenefitsMaeztra } from '../BenefitsMaeztra'
import { ModalNewsletter } from '../ModalNewsletter'

export function ContentHome (){
  return (
    <main className={s.containerMainPage}>
      <CarouselBanner/>
      <section className={s.wrapperMainPage}>
        <BenefitsMaeztra/>
        <Brands/>
        <ShowCaseProduct/>
        <BannerHome/>
      </section>
      <ModalNewsletter/>
    </main>
  )
}