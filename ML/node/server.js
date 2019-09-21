/*
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
const express = require('express');  //includes express framework
const app = express()                //framework named 'app'


const SpotifyTools = require('./spotify-tools');
const s = new SpotifyTools();
s.song_call('All the Small Things');


console.log('0');
//define function which calls py script
let runPy = new Promise(function(success, nosuccess) {
    const { spawn } = require('child_process');
    const pyprog = spawn('python', ['../neuralnet/main.py']);

    pyprog.stdout.on('data', function(data) {
        console.log('1');
        success(data);
    });

    pyprog.stderr.on('data', (data) => {
        console.log('2');
        nosuccess(data);
    });
});

app.get('/', (req, res) => {
    runPy.then(function(fromRunpy) {
        //value from py script, cast to be a number
        var x = Number(fromRunpy);
        res.end(fromRunpy);
    });
})


//'new playlist'


//'like'

//'dislike'

//'new'


app.listen(4000, () => console.log('Application listening on port 4000!'))
