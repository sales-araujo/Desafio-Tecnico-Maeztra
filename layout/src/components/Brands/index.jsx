import brand01 from '../../assets/images/brand01.png'
import brand02 from '../../assets/images/brand02.png'
import brand03 from '../../assets/images/brand03.png'
import brand04 from '../../assets/images/brand04.png'
import brand05 from '../../assets/images/brand05.png'
import s from './styles.module.css'

export function Brands(){
  return (
    <section className={s.containerBrands}>
      <h2>Marcas Parceiras</h2>
      <div className={s.wrapperBrands}>
        <div className={s.imgBrand}>
          <img src={brand01} alt="Imagem da marca" />
        </div>
        <div className={s.imgBrand}>
          <img src={brand02} alt="Imagem da marca" />
        </div>
        <div className={s.imgBrand}>
          <img src={brand03} alt="Imagem da marca" />
        </div>
        <div className={s.imgBrand}>
          <img src={brand04} alt="Imagem da marca" />
        </div>
        <div className={s.imgBrand}>
          <img src={brand05} alt="Imagem da marca" />
        </div>
      </div>
    </section>
  )
}