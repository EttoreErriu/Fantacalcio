import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import '../css/showplayers.css';

function ShowPlayers() {

    const [players, setPlayers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/realplayers").
            then(response => response.json())
            .then(data => setPlayers(data))
    }, []);

    const clickTeams = (id) => {
        navigate(`/statisticsplayers/${id}`);
    }

    return (
        <div>
            <Link to={"/"}><FontAwesomeIcon className='icon-size' icon={faHouse} /></Link>
            <h1 className="player-tittle">Lista Giocatori</h1>
            <div className="container-fluid ">
                <div className="row">
                    <div  className="col-3 title-showplayer ">Name</div>
                    <div className="col-3 title-showplayer ">Surname</div>
                    <div className="col-3 title-showplayer ">Team</div>
                    <div className="col-3 title-showplayer ">Position</div>
                </div>
            </div>
            {
                players.map((player) => {
                    return (
                        <div className="container-fluid " key={player.id}>
                            <div onClick={() => clickTeams(player.id)} className="row  row-players">
                                <div  className="col-3 list-players">{player.name}</div>
                                <div className="col-3 list-players">{player.surname}</div>
                                <div className="col-3 list-players">{player.realteam}</div>
                                <div className="col-3 list-players">{player.position}</div>                                    
                            </div>
                        </div>

                    )
                })

            }
        </div >

    )
}

export default ShowPlayers;