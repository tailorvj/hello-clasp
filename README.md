# Hello Clasp

The 'Hello, World!' of Apps Script development for Google Slides Editor add-ons.

Follow these steps to clone and deploy to Google Apps Script:

## Change log

### version 0.0.4 - create a simple sidebar

* Added instructions for creating a sidebar. 
* Added to the src: sidebar functions and sidebar.html

### Version 0.0.3

* Added learn folder with instructions and code you can copy/paste in your environment
* Updated README

## You can open this repo for immediate development on Gitpod

* Fork this project
* Copy your repo URL from the browser address bar
* Open https://gitpod.io/
* Create a new workspace
* Paste your repo address
* Skip to Create a clasp project below
* clasp login requires the use of curl for the final stage on Gitpod

## For local development (not on gitpod) This repo assumes you have Node.js, NPM and Clasp CLI installed

If you would like to install node.js v21.0.0, you can use NVM like this:

Install NVM & node.js v21
```bash

$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

$ source ~/.bashrc 

$ nvm install v21.0.0

$ nvm use v21.0.0

```



To install Clasp
```bash

$ npm install -g @google/clasp

```

## Fork this repo

Once it is forked to your Github profile, clone it to your desktop 

IMPORTANT: replace <your-github> with your github user name

```bash

git clone git@github.com:<your-github>/hello-clasp.git
    
```

## Create a clasp project

```bash

$ cd hello-clasp/src

$ clasp login

$ clasp create --title 'hello clasp' --type 'slides'

```

## Push to Apps Script and open for deployment

```bash

$ clasp push

$ clasp open

```

## Create a test deployment and test on an existing Slides presentation

Open the Deploy menu and create a test deployment for an Editor add-on, on an existing Slides presentation.