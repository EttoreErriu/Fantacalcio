import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

export default function ShowStatisticsPlayer() {

    const [players, setPlayers] = useState([]);

    let params = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/realplayers/${params.id}`).
            then(response => response.json())
            .then(data => setPlayers(data))
    }, []);


    return (
        <div>
            <Link to={"/players"}><FontAwesomeIcon className='icon-size' icon={faArrowLeft} /></Link>
            <Link to={"/teams"}><FontAwesomeIcon className='icon-size' icon={faPeopleGroup} /></Link>
            <div className="card-player">
                <div className="card">
                    <img className="lautaro" src={players.card} />
                    <div className="card-body row">
                        <div className="col-6">
                            <h5 className="card-title">Nome</h5>
                            <span className="card-text">{players.name}  {players.surname}</span>
                        </div>
                        <div className="col-6">
                            <h5 className="card-title">ANNI</h5>
                            <span className="card-text"> {players.age}</span>
                        </div>
                    </div>
                    <div className="card-body row">
                        <div className="col-6">
                            <h5 className="card-title">Ruolo</h5>
                            <span className="card-text">{players.position}</span>
                        </div>
                        <div className="col-6">
                            <h5 className="card-title">Gol</h5>
                            {(players.position === "Portiere") ? (<span className="card-text">Subiti {players.golconceded} </span>) : (<span className="card-text">Segnati {players.golscored} </span>)}
                        </div>
                    </div>

                    <div className="card-body row">
                        <div className="col-6">
                            <h5 className="card-title">Partite Giocate</h5>
                            <span className="card-text">{players.matchplayed}</span>
                        </div>
                        <div className="col-6">
                            <h5 className="card-title">Media Voto</h5>
                            <span className="card-text">{players.average}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}