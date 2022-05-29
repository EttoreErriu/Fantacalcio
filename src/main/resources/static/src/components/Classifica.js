import '../css/App.css';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import React from "react";

function Classifica() {

    const [classifiche, setClassifiche] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/leaguetables").
            then(response => response.json())
            .then(data => setClassifiche(data))
    }, []);

    return (
        <div>
            <Link to={"/"}><FontAwesomeIcon className='icon-size' icon={faHouse} /></Link>
            <table className="table table-hover classifica-table">
                <thead className='thead-color' >
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Team</th>
                        <th scope="col">G</th>
                        <th scope="col">V</th>
                        <th scope="col">N</th>
                        <th scope="col">P</th>
                        <th scope="col">GF</th>
                        <th scope="col">GS</th>
                        <th scope="col">PT</th>
                    </tr>
                </thead>
                {
                    classifiche.map((classifica, index) => {
                        return (
                            <tbody className='tbody-classifica'>
                                <td>{index + 1}</td>
                                <td>{classifica.team.name}</td>
                                <td>{classifica.game}</td>
                                <td>{classifica.win}</td>
                                <td>{classifica.draw}</td>
                                <td>{classifica.lose}</td>
                                <td>{classifica.goalscored}</td>
                                <td>{classifica.goalconceded}</td>
                                <td>{classifica.point}</td>
                            </tbody>

                        )
                    })

                }

            </table>
        </div>
    )
}

export default Classifica;