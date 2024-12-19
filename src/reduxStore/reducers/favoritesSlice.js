import {createSlice} from '@reduxjs/toolkit';
import { songsList } from '../../app/constants';

const initialState = {
  songsList: [...songsList],
  favouritesList: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFav(state, action) {
      state.favouritesList = [...state.favouritesList, action.payload];
    },
    removeFromFavList: (state, action) => {
      state.favouritesList = state.favouritesList.filter(song => song.id !== action.payload.id);
    },
    updateSongList: (state, action) => {
      const song = state.songsList.find(item => item.id === action.payload.id);
      if (song) {
        song.isAddedToFav = !song.isAddedToFav;
      }
    },
  },
});

export const {addToFav, removeFromFavList, updateSongList} = favoritesSlice.actions;

export const getFavouriteSelector = state => state.favorites || {};

export default favoritesSlice.reducer;
