import s from '../styles.module.css'
import { CollectionProductHighlights } from '../../../resources/CollectionProductHighlights'

export function ShelfProducts({item}){
  const { image, name, price, description, sku } = item

  return (
    <a href="#" className={s.cardProductWrapper}>
      <div className={s.wrapperInfoProduct}>
        <div className={s.imageShelf}>
          <img src={image} alt="Imagem do produto"/>
        </div>
        <div className={s.contentInfoProduct}>
          <div className={s.containerSku}>
            {
              sku.map((sku, index) => {
                return (
                  <button 
                    key={index} 
                    style={{backgroundColor: sku.hex}}
                    className={s.btnSkuSelector}
                  ></button>
                )
              })
            }
          </div>
          <p className={s.priceProduct}>{price}</p>
          <p className={s.nameProduct}>{name}</p>
          <p className={s.description}>{description}</p>
        </div>
        <div className={s.containerBtnAddToCart}>
          <button className={s.btnAddToCart}>Adicionar</button>
        </div>
      </div>
    </a>
  )
}