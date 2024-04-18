import s from './styles.module.css'
import { Newsletter } from '../Newsletter'
import iconFacebook from '../../assets/icons/icon-facebook.svg'
import iconLinkedin from '../../assets/icons/icon-linkedin.svg'
import iconInsta from '../../assets/icons/icon-insta.svg'
import iconYoutube from '../../assets/icons/icon-youtube.svg'
import payment01 from '../../assets/icons/icon-payment01.svg'
import payment02 from '../../assets/icons/icon-payment02.svg'
import logoMaeztraFooter from '../../assets/images/logo-maeztra-footer.svg'
import logoVtex from '../../assets/images/logo-vtex.svg'
import { useRef } from 'react'

export function Footer(){
  const refOpenMenuInfo = useRef(null)
  const refOpenMenuMyAccount = useRef(null)
  const refOpenMenuLocation = useRef(null)

  function handleOpenMenuInfo(){
    const disclosure01 = refOpenMenuInfo.current
    disclosure01.classList.toggle(`${s.active}`)
  }
  
  function handleOpenMenuMyAccount(){
    const disclosure02 = refOpenMenuMyAccount.current
    disclosure02.classList.toggle(`${s.active}`)
  }

  function handleOpenMenuLocation(){
    const disclosure03 = refOpenMenuLocation.current
    disclosure03.classList.toggle(`${s.active}`)
  }

  return (
    <footer className={s.containerFooter}>
      <Newsletter/>
      <section className={s.wrapperFooter}>
        <div className={s.navBarFooter}>
          <h2 onClick={handleOpenMenuInfo}>Informações</h2>
          <div ref={refOpenMenuInfo} className={`${s.listNavBarFooter} ${s.disabled}`}>
            <a href='#'>Quem Somos</a>
            <a href='#'>Prazo de Envio</a>
            <a href='#'>Trocas e Devoluções</a>
            <a href='#'>Promoções e Cupons</a>
          </div>
        </div>
        <div className={s.navBarFooter}>
          <h2 onClick={handleOpenMenuMyAccount}>Minha Conta</h2>
          <div ref={refOpenMenuMyAccount} className={`${s.listNavBarFooter} ${s.disabled}`}>
            <a href='#'>Minha Conta</a>
            <a href='#'>Meus Pedidos</a>
            <a href='#'>Cadastre-se</a>
          </div>
        </div>
        <div className={s.navBarFooter}>
          <h2 onClick={handleOpenMenuLocation}>Onde nos Encontrar</h2>
          <div ref={refOpenMenuLocation} className={`${s.listNavBarFooter} ${s.disabled}`}>
            <a href='#'>Lojas</a>
            <a href='#'>Endereço</a>
          </div>
        </div>
      </section>
      <section className={s.containerCopyright}>
        <div className={s.wrapperCopyright}>
          <div className={s.infoCopyright}>
            <a href='#'>
              <img src={iconFacebook} alt='Icone de rede social' />
            </a>
            <a href='#'>
              <img src={iconLinkedin} alt='Icone de rede social' />
            </a>
            <a href='#'>
              <img src={iconInsta} alt='Icone de rede social' />
            </a>
            <a href='#'>
              <img src={iconYoutube} alt='Icone de rede social' />
            </a>
          </div>
          <div className={s.infoCopyright}>
            <img src={payment01} alt='Icone de pagamento' />
            <img src={payment02} alt='Icone de pagamento' />
            <img src={payment01} alt='Icone de pagamento' />
            <img src={payment02} alt='Icone de pagamento' />
          </div>
          <div className={s.containerDevelopmentPage}>
            <div className={s.developmentPage}>
              <p>Powered by</p>
              <a href='https://vtex.com/br-pt/' target= "_blank" rel="noreferrer noopener">
                <img src={logoVtex} alt='Logo da Vtex' />
              </a>
            </div>
            <div className={s.developmentPage}>
              <p>Developed by</p> 
              <a href='https://maeztra.com/' target= "_blank" rel="noreferrer noopener">
                <img src={logoMaeztraFooter} alt='Logo da Maeztra' />
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}