# fairviewrobotics.github.io

## Description

This repo holds every associated with [http://fairviewrobotics.org/](http://fairviewrobotics.org/)

This is a react application and thus is a single page app, to learn more look at the [react readme](REACT-README)

## Usage

###### How the heck I am supposed to run this?

This project uses npm (node package manager). NPM downloads libraries that we can use, saving us loads of time.
Checkout [this stack overflow question](https://stackoverflow.com/questions/31930370/what-is-npm-and-why-do-i-need-it) for a quick answer
and this [sitepoint article](https://www.sitepoint.com/beginners-guide-node-package-manager/) for more detail information.

**NOTE:**

You are going to have to install [NPM and nodejs](https://nodejs.org/en/). NPM is install with node.

Answer:

First install everything: `npm install`

Then run the dev server: `npm start`

Done!

###### How do I deploy to github pages?

Run the deploy command: `npm run deploy`

**NOTE:**

NPM scripts that are [custom](https://stackoverflow.com/questions/36433461/how-do-i-add-a-custom-script-to-my-package-json-file-that-runs-a-javascript-file)
need to start like so `npm run COMMAND`

Also, the deploy command runs the build command then deploys using [gh-pages](https://github.com/tschaub/gh-pages#gh-pages) to push the build folder.