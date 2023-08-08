import { configureStore } from '@reduxjs/toolkit';
import tournamentReducer from '@/app/redux/features/tournament-slice';

export const store = configureStore({
  reducer: {
    tournamentReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
