'use client';
import React, { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPlayer } from '../redux/features/tournament-slice';


export default function AddPlayer() {
    const dispatch = useDispatch();
    const [playerName, setPlayerName] = useState("")

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (playerName.length > 0){
            dispatch(addPlayer(playerName));
        }
    }
    
return (<div className='row mx-auto w-50 px-2 py-4 mt-4 border border-dark rounded'>
        <form onSubmit={handleSubmit}>
            <div>
                <label className='me-3'>Name: </label>
                <input className='py-2 px-1' type="text" id="name" name="name" onChange={e => setPlayerName(e.target.value)} />

                <button className="ms-4 py-2 px-3" type="submit">Add Player</button>
            </div>
        </form>
    </div>

    )
}
