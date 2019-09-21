const SpotifyAPI = require('node-spotify-api');

class SpotifyTools {
    constructor(){
        //spotify api setup
        this.Spotify = require('node-spotify-api');

        this.spotify = new this.Spotify({
            id:           '67c9bdb789854efc9b20b4c4c06ca0cb',
            secret:       '22132f38bf3e47b794903f9302b5be8e',
            redirectUri:  'http://localhost:8888/'
        });

        // return spotify;
    };

    song_call(title){
        this.spotify.search({type: 'track',
        query: title },
        function(err,data){
            if(err){
                console.log('Error occured:' + err);
            }
            console.log(data);
        });

    }
};


module.exports = SpotifyTools;
