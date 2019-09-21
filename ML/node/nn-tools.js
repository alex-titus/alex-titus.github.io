// const NNTools = require('../neuralnet/main.py');
const express = require('express');
const app = express();

class NNRequest{
  constructor (){
    // const this.express = require('express');
    // const this.app = express();
    // this.app = app;
  }

  request(nn_request){
    this.runPy = new Promise(function(success, nosuccess) {
        const { spawn } = require('child_process');
        const pyprog = spawn('python', ['../neuralnet/main.py', nn_request]);

        pyprog.stdout.on('data', (data) => { success(data); } );
        pyprog.stderr.on('data', (data) => { nosuccess(data); } );

    });
  } // end request function

  report (){
    app.get('/', (req, res) => {
        this.runPy.then(function(fromRunpy) {
            //value from py script, cast to be a number
            // (fromRunpy);
            console.log(fromRunpy);
            res.end(fromRunpy);
        });
    });
  } // end report function

}  // end NNNRequest class

module.exports = NNRequest;
