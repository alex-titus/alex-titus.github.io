AI portion of Project PHI
Sean Brittingham

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
    -Anaconda:
    (might use TensorFlow... unsure)
