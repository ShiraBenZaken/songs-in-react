import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'LaLaLa',
            duration: '4:06'
        },
        {
            title: 'LuLuLu',
            duration: '3:29'
        },
        {
            title: 'LILILI',
            duration: '4:15'
        },
        {
            title: 'LoLoLo',
            duration: '3:40'
        }
    ]
};

const selectionSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectionSongReducer
});