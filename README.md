# Hello Clasp

The 'Hello, World!' of Apps Script development for Google Slides Editor add-ons.

Follow these steps to clone and deploy to Google Apps Script:

## Change log

### v0.0.2 feature/gitpod - try node.js v20

This is an experimental version to test whether Clasp would work with Node 20 on Gitpod

The reason for this is that I've encountered the following error when trying to use clasp on node.js v18:

```bash

$ clasp login
node:internal/modules/cjs/loader:1077
  const err = new Error(message);
              ^

Error: Cannot find module 'define-data-property'

```

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

## Clone this repo

```bash

git clone git@github.com:tailorvj/hello-clasp.git
    
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