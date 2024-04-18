import iconBenefits01 from '../../assets/icons/icon-benefits01.svg'
import iconBenefits02 from '../../assets/icons/icon-benefits02.svg'
import iconBenefits03 from '../../assets/icons/icon-benefits03.svg'
import iconBenefits04 from '../../assets/icons/icon-benefits04.svg'
import iconBenefits05 from '../../assets/icons/icon-benefits05.svg'
import s from './styles.module.css'

export function BenefitsMaeztra(){
  return (
    <section className={s.containerBenefitsMaeztra}>
      <h2>Por que comprar na Maeztra?</h2>
      <div className={s.wrapperCards}>
        <div className={s.cardBenefitsMaeztra}>
          <img src={iconBenefits01} alt="Icone" />
          <p><strong>Produtos importados</strong><br/>Produto de Alta Qualidade</p>
        </div>
        <div className={s.cardBenefitsMaeztra}>
          <img src={iconBenefits02} alt="Icone" />
          <p><strong>Estoque no Brazil</strong><br/>Produtos mais perto de você!</p>
        </div>
        <div className={s.cardBenefitsMaeztra}>
          <img src={iconBenefits03} alt="Icone" />
          <p><strong>Trocas Garantidas</strong><br/>Trocas em até 48 horas, vejas as regras</p>
        </div>
        <div className={s.cardBenefitsMaeztra}>
          <img src={iconBenefits04} alt="Icone" />
          <p><strong>Ganhe 5% off</strong><br/>Pagando à vista no Cartão</p>
        </div>
        <div className={s.cardBenefitsMaeztra}>
          <img src={iconBenefits05} alt="Icone" />
          <p><strong>Frete Grátis</strong><br/>Em compras acima de R$ 499,00</p>
        </div>
      </div>
    </section>
  )
}