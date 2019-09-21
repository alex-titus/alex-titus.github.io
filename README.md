# alex-titus.github.io


AI portion of Project PHI 
Sean Brittingham
****************************************************
IMPORTANT:
    
    -9/21/19 i have been able to successfully run server.js on both Windows and Linux Mint. 
        Having some trouble installing Anaconda on Mint...

    -../node is missing a directory named node_modules. this comes from Node.js and contains Express. you will have to move the files of
        ../node into the directory with node_modules in order for this to build. node_modules is too large to upload to GitHub. working 
        on a solution
    
    - removed 'secret' from spotify-tools.js. You will have to get this from the Discord and add it to the file.

****************************************************
UPDATES:    
    -removed server, no longer writes to localhost

****************************************************
Using:
JavaScript to call Python scripts

-Node.js: "Node.js is an open-source, cross-platform Javascript run-time
        environment that executes JavaScript code server-side." -Wikipedia
        *linux install:
            Binary (64 bit): https://nodejs.org/en/download/
            Through Console:
                curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
                sudo apt-get install -y nodejs
                (https://github.com/nodesource/distributions/blob/master/README.md)

 -Express: "Express is a Node.js application framework
        *linux(Ubuntu & Mint) install:
            follow this guide:
                (https://expressjs.com/en/starter/installing.html)

Python 2.7 (specifically Python 2.7.15rc1) to manage the neural net which
    determines what songs to add:
 
 -Anaconda: (might use TensorFlow... unsure)
