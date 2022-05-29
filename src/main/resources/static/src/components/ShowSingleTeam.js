import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import React from "react";

export default function ShowSingleTeam() {

    let params = useParams();

    const [players, setPlayers] = useState([]);

    const navigate = useNavigate();


    useEffect(() => {
        fetch(`http://localhost:8080/teams/realplayers/${params.id}`).
            then(response => response.json())
            .then(data => setPlayers(data))
    }, []);

    const clickPlayer = (id) => {
        navigate(`/statisticsplayers/${id}`);
    }

    return (
        <div>
            <Link to={"/teams"}><FontAwesomeIcon className='icon-size' icon={faArrowLeft} /></Link>
            <h1 className="player-tittle">Lista Squadre</h1>
            <div className="container-fluid show-single">
                <div className="row">
                    <div className="col-1 title-showplayer">#</div>
                    <div className="col-3 title-showplayer">Surname</div>
                    <div className="col-3 title-showplayer">Team</div>
                    <div className="col-3 title-showplayer">Position</div>
                </div>
            </div>
            {
                players.map((player, index) => {
                    return (
                        <div className="container-fluid show-single" key={player.id}>
                            <div  onClick={() => clickPlayer(player.id)} className="row  row-players">
                                <div className="col-1 list-players">{index +1}</div>
                                <div className="col-3 list-players">{player.surname}</div>
                                <div className="col-3 list-players">{player.realteam}</div>
                                <div className="col-3 list-players">{player.position}</div>
                            </div>
                        </div>

                    )
                })
            }
        </div>
    )
}