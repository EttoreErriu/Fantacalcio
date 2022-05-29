import { Link , useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import React from "react";

function ShowTeams() {

    
    const [teams, setTeams] = useState([]);

     const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/teams").
            then(response => response.json())
            .then(data => setTeams(data))
    }, []);

    const clickTeams = (id) => {
        navigate(`/fantaplayers/${id}`);
    }

    return(
        <div>
        <Link to={"/"}><FontAwesomeIcon className='icon-size' icon={faHouse} /></Link>
        <h1 className="player-tittle">Lista Squadre</h1>
        <div className="container-fluid showplayer-box">
            <div className="row">
                <div className="col-3 title-showplayer ">Name</div>
                <div className="col-3 title-showplayer ">User</div>
                <div className="col-3 title-showplayer ">Championship</div>               
            </div>
        </div>
        {
            teams.map((team) => {
                return (
                    <div className="container-fluid  showplayer-box " key={team.id}>
                        <div className="row  row-players">
                            <div  onClick={() => clickTeams(team.id)} className="col-3 list-team">{team.name}</div>
                            <div className="col-3 list-players">{team.user.name}</div>
                            <div className="col-3 list-players">{team.championship.name}</div>                             
                        </div>
                    </div>

                )
            })

        }
    </div >

    )
}

export default ShowTeams;