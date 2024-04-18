import Modal from 'react-modal'
import { useEffect, useState } from 'react'
import './styles.css'
import bannerModal from '../../assets/images/banner-modal.png'
import iconMailNewsletter from '../../assets/icons/icon-mail-newsletter.svg'
import iconBtnSendNewsletter from '../../assets/icons/icon-btn-send-newsletter.svg'

Modal.setAppElement('body');

export function ModalNewsletter(){
  const [modalIsOpen, setModalIsOpen] = useState(true)
  const [showMessage, setShowMessage] = useState(false)
  const [valueInput, setValueInput] = useState('')
  const [isEmail, setIsEmail] = useState(false)

  function handleSendRegistration(e){
    e.preventDefault()

    setShowMessage(true)
    localStorage.setItem('email', valueInput)

    setInterval(() => {
      setShowMessage(false)
      setModalIsOpen(false)
    }, 3000)
  }

  function handleCloseModal(){
    setModalIsOpen(false)
  }

  useEffect(() => {
    const localStorageEmail = localStorage.getItem('email');

    setIsEmail(localStorageEmail ? false : true)
  }, []);

  return isEmail ? (
    <Modal
    isOpen={modalIsOpen}
    onRequestClose={handleCloseModal}
    overlayClassName= 'modalOverlay'
    className='modalContent'
    >
      <section className='wrapperModalInfo'>
        <div className='containerBannerModal'>
          <img src={bannerModal} alt='Banner Modal'/>
        </div>
        <button
          onClick={handleCloseModal}
          className='modalCloseBtn'
        >
          fechar
        </button>
        {
          !showMessage &&
          <div className='wrapperModalNewsletter'>
            <div className='containerTitleModalNewsletter'>
              <img src={iconMailNewsletter} alt='Icone da carta'/>
              <h2>bem bindo à maeztra</h2>
              <h3>Receba em Primeira mão<br/><strong>desconto e ofertas exclusivas</strong></h3>
            </div>
            <form onSubmit={(e) => handleSendRegistration(e)} className='formModalNewsletter'>
              <input 
                type='email'
                placeholder='Digite seu e-mail'
                required
                onChange={(e) => setValueInput(e.target.value)}
              />
              <button>
                enviar
                <img src={iconBtnSendNewsletter} alt='Icone de enviado'/>
              </button>
            </form>
          </div>
        }
        {
          showMessage && 
          <div className='messageSendNewsletterModal'>
            <p>Cadastro enviado com sucesso!</p>
          </div>
        }
      </section>
    </Modal>
  ) : null
}