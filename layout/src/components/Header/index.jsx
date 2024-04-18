import logo from '../../assets/images/logo-maeztra.svg'
import login from '../../assets/icons/icon-user.svg'
import favorites from '../../assets/icons/icon-heart.svg'
import minicart from '../../assets/icons/icon-minicart.svg'
import sideBar from '../../assets/icons/drawer.svg'
import s from './styles.module.css'
import { CategoryMenu } from '../../resources/CategoryMenu.jsx'
import { DrawerHeaderMobile, NavHeaderMobile } from './Mobile/Menu'
import { TopHeader } from './TopHeader/index.jsx'

export function Header(){
  return (
    <header className={s.containerHeaderPage}>
      <TopHeader/>
      <section className={s.containerHeader}>
        <div className={s.wrapperHeader}>
          <div className={s.containerStructureResponsive}>
            <div className={s.wrapperStructureResponsive}>
              <DrawerHeaderMobile/>
              <a href='#' className={s.logoPage}>
                <img src={logo} alt="Logo" />
              </a>
            </div>
            <NavHeaderMobile/>
          </div>
          <div className={s.searchProductWrapper}>
            <input 
              placeholder='O Que Você Busca?'
              className={s.inputSearch}
            />
            <button className={s.btnSearch}>Buscar</button>
          </div>
          <div className={`${s.containerNavHeader} ${s.disabled}`}>
            <a href='#' title='Minha Conta' className={s.containerNav}>
              <img src={login} alt='Login' />
              <p>Minha Conta</p>
            </a>
            <a href='#' title='Favoritos' className={s.containerNav}>
              <img src={favorites} alt='Login' />
              <p>Favoritos</p>
            </a>
            <a href='#' title='Meu Carrinho' className={`${s.containerNav} ${s.btnMinicart}`}>
              <img src={minicart} alt='Login' />
              <p>Meu Carrinho</p>
            </a>
          </div>
        </div>
      </section>
      <section className={s.containerNavBar}>
        <nav className={s.wrapperNavBar}>
          <>
            {
              CategoryMenu.map((menu, index) => {
                const { link, name, highlights } = menu

                return (
                  <a 
                    href={link} 
                    key={index} 
                    className={highlights?.length > 0 ? `${s.menuItem} ${s.menuItemHighlights}` : `${s.menuItem}`}
                  > 
                    {
                      highlights?.length > 0 ?
                      <img src={highlights} alt='Icone' />
                      : ''
                    }
                    {name}
                  </a>
                )
              })
            }
            <div className={s.sideBar}>
              <img src={sideBar} alt='Menu' />
            </div>
          </>
        </nav>
      </section>
    </header>
  )
}