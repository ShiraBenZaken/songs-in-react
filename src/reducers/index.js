import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'Can I be him',
            duration: '4:06'
        },
        {
            title: 'Impossible',
            duration: '3:29'
        },
        {
            title: 'Hello',
            duration: '4:15'
        },
        {
            title: 'Sorry',
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