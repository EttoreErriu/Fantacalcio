import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '../css/matches.css';

export default function Matches() {

    const [matches, setMatches] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/matches").
            then(response => response.json())
            .then(data => setMatches(data))
    }, []);

    return (
        <div>
            <Link to={"/"}><FontAwesomeIcon className='icon-size' icon={faArrowLeft} /></Link>
            <h1 className="player-tittle">Calendario</h1>
            <div className="container-fluid box-matches ">
                <div className="row">
                    <div className="col-1 title-matches ">G</div>
                    <div className="col-3 title-matches ">Casa</div>
                    <div className="col-3 title-matches ">Risultato</div>
                    <div className="col-3 title-matches ">Fuori</div>
                </div>
            </div>

            {
                matches.map((match) => {
                    return (
                        
                        <div className="container-fluid box-matches " key={match.id}>
                            <div className="row  row-matches">
                                <div className="col-1  list-players">{match.matchesnumber}</div>
                                <div className="col-3 list-players">{match.teamHome.name}</div>
                                <div className="col-3 list-players">{match.homegol} - {match.awaygol}</div>
                                <div className="col-3 list-players">{match.teamAway.name}</div>
                            </div>
                        </div>

                    )
                })

            }

        </div>
    )
}