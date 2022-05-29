import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import '../css/questions.css';
const Question = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className='question'>
      <header>
        <h4 onClick={() => setExpanded(!expanded)} className='question-title'>
          {title}
        </h4>
        <button className='btn-question' onClick={() => setExpanded(!expanded)}>
          {expanded ? <FontAwesomeIcon icon={faArrowLeft} /> : <FontAwesomeIcon  icon={faPlus} />}
        </button>
      </header>
      {expanded && <p>{info}</p>}
    </article>
  )
}

export default Question
