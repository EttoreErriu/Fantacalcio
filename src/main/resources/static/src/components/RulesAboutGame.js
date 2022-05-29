import { Link } from "react-router-dom";
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import data from '../pages/data'
import SingleQuestion from './Question'

export default function RulesAboutGame() {

    const [questions, setQuestions] = useState(data)

    return (
        <main>
           <Link to={"/"}><FontAwesomeIcon className='icon-size' icon={faHouse} /></Link>  
        <div className='container'>
          <h3>Domande e risposte sulle regole di gioco</h3>
          <section className='info'>
            {questions.map((question) => (
              <SingleQuestion key={question.id} {...question} />
            ))}
          </section>
        </div>
      </main>
    )
}