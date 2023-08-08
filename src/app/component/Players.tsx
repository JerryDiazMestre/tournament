'use client';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../redux/store";
import { play } from '../redux/features/tournament-slice';


export default function Players() {
    const teams = useSelector((state: RootState) => state.tournamentReducer)
    const dispatch = useDispatch();

    const Play = () => {
        dispatch(play());
    }

    return (
        <div className="row w-50 min-vh-50 mx-auto p-2 mt-4 border border-dark rounded">
            <div className="col">
                <div className='row mx-auto mb-3'>
                    <div className='col'>
                        <h1 className='fw-bold'>Pickleball Tournament</h1>
                        <h2>Players</h2>
                    </div>
                </div>
                <div className="row">
                    <div className='col'>
                        <h4>Team One</h4>
                        <div>
                            {teams.teamOne.map((name, index) => <p key={index}>{name}</p>)}
                        </div>
                        <div>
                            <p>Score: {teams.pointsTeam1}</p>
                        </div>
                    </div>
                    <div className='col'>
                        <h4>Team Two</h4>
                        <div>
                            {teams.teamTwo.map((name, index) => <p key={index}>{name}</p>)}
                        </div>
                        <div>
                            <p>Score: {teams.pointsTeam2}</p>
                        </div>
                    </div>
                </div>
                <div className='row my-2 text-center'>
                    <div className='col'>
                        <button className={`py-2 px-3 ${!teams.gameOver && teams.teamsAreFull ? "" : "d-none"}`} onClick={Play}>Play Rally</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
