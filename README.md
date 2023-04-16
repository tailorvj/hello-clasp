# Hello Clasp

The 'Hello, World!' of Apps Script development for Google Slides Editor add-ons.

Follow these steps to clone and deploy to Google Apps Script:

## This repo assumes you have Node.js, NPM and Clasp CLI installed

Installing Node.js and NPM is beyond the scope of this tutorial. Search for it. 

To install Clasp
```bash

npm install -g @google/clasp

```

## Clone this repo

```bash

git clone git@github.com:tailorvj/hello-clasp.git
    
```

## Create a clasp project

```bash

cd hello-clasp/src

clasp login

clasp create --title 'hello clasp' --type 'slides'

```

## Push to Apps Script and open for deployment

```bash

clasp push

clasp open

```

## Create a test deployment and test on an existing Slides presentation

Open the Deploy menu and create a test deployment on an existing Slides presentation.