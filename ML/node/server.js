/* server.js

sample Spotify API calls and setup using npmjs' node-spotify-api
  found at: https://www.npmjs.com/package/node-spotify-api

setup:
    - node.js; express framework
    - python 2.7; anaconda


    TODO:
    -move spotify 'functions' to spotify-tools.js
    -move nn 'functions' to nn-tools.js
    -nn seems to be connected; need to develop and check
    -is ther a better way to do any/all of this
    -connect with group and inquire if this is how we want to do this
    portion of the app
    -simple website to test js code
*/

/* communicates with python script, ../neuralnet/test.py

    writes to webpage... do not want
*/

// imports spotify-tools.js to access spotify api
const SpotifyTools = require('./spotify-tools');
const s = new SpotifyTools();

// imports nn-tools.js to access python neural network
const NNRequest = require('./nn-tools')
const new_playlist = new NNRequest();

var playlist = new_playlist.request('test from js');
// console.log(playlist);
new_playlist.report();



//'new playlist'


//'like'

//'dislike'

//'new'


// sample song call
// s.song_call('All the Small Things');
