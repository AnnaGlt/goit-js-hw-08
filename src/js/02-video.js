
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const CURRENT_TIME = "videoplayer-current-time";

localStorage.setItem('CURRENT_TIME', JSON.stringify(CURRENT_TIME));

updatedTime();

function updatedTime() {
    const stopTime = localStorage.getItem(CURRENT_TIME); 
  
    if (!stopTime) {
        return;
    }

    const savedTime = JSON.parse((stopTime).seconds);
   
    player.setCurrentTime(savedTime).then(function(seconds) {
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