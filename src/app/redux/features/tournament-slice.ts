'use client';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = {
    teamOne: string[];
    teamTwo: string[];
    pointsTeam1: number;
    pointsTeam2: number;
    gameOver: boolean;
    teamsAreFull: boolean;
};
const initialState: InitialState = {
    teamOne: [],
    teamTwo: [],
    pointsTeam1: 0,
    pointsTeam2: 0,
    gameOver: false,
    teamsAreFull: false
};


const tournamentSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    addPlayer: (state, action: PayloadAction<string>) => {
        if (state.teamOne.length < 2){
            state.teamOne.push(action.payload);
        } else if(state.teamTwo.length < 2){
            state.teamTwo.push(action.payload);
        }
        if (state.teamOne.length > 1 && state.teamTwo.length > 1)
        state.teamsAreFull = true;
    },
    play: (state) => {
        const rndInt = Math.floor(Math.random() * 2) + 1;

        if (rndInt == 1){
            state.pointsTeam1++;
        } else {
            state.pointsTeam2++;
        }
        if (state.pointsTeam1 > 10 || state.pointsTeam2 > 10){
            state.gameOver = true;
        }
    }
  }
});

export const { addPlayer, play } = tournamentSlice.actions;
export default tournamentSlice.reducer;
