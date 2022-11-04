
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const CURRENT_TIME = "videoplayer-current-time";

player.on('timeupdate', throttle(savedSesionTime, 1000));

function savedSesionTime(time) {
 localStorage.setItem('CURRENT_TIME', JSON.stringify(time));  
}

updatedTime();

function updatedTime() {
    const stopTime = localStorage.getItem(CURRENT_TIME); 

    const savedTime = JSON.parse(localStorage.getItem(CURRENT_TIME)).seconds;
   
    player.setCurrentTime(savedTime).then(function() {
    // seconds = the actual time that the player seeked to
    }).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
};