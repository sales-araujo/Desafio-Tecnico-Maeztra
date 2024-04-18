import { SlArrowLeft } from 'react-icons/sl'
import { SlArrowRight } from 'react-icons/sl'
import './styles.css'

export function Arrows({ type, onClick }){
  const arrowIcon = type ===  "prev"
  ? <SlArrowLeft className="arrowImg"/>
  : <SlArrowRight className="arrowImg"/>

  const classArrow = type === "prev" ? "slick-prev arrow" : "slick-next arrow"

  function handleArrowClick(e){
    e.stopPropagation();
    e.preventDefault();
    onClick()
  }

  return (
    <button
      className={classArrow}
      onClick={(e) => { handleArrowClick(e)}}
    >
      { arrowIcon }
    </button>
  )
}
