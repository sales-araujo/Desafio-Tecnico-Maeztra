import s from './styles.module.css'
import { useState } from 'react'

export function Newsletter(){
  const [showMessage, setShowMessage] = useState(false)

  function handleSendRegistration(e){
    e.preventDefault()

    setShowMessage(true)

    setInterval(() => {
      setShowMessage(false)
    }, 5000)
  }

  return (
    <section className={s.containerNewsletter}>
      {
        !showMessage &&
        <>
          <h2>Recebe Nossa Newsletter</h2>
          <form onSubmit={(e) => handleSendRegistration(e)} className={s.formNewsletter}>
            <input 
              type='email'
              placeholder='Digite seu e-mail'
              required
            />
            <button>Enviar</button>
          </form>
        </>
      }
      {
        showMessage && 
        <div className={s.messageSend}>
          <p>Cadastro enviado com sucesso!</p>
        </div>
      }
    </section>
  )
}