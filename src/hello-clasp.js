function onOpen() {
  var ui = SlidesApp.getUi();
  ui.createMenu('Hello, World!')
    .addItem('Say Hello', 'helloWorld')
    .addItem('Open Sidebar', 'openSidebar')
    .addItem('Open Dialog', 'openDialog')
    .addToUi();
}

function helloWorld() {
  Logger.log('Hello, World!');
  var ui = SlidesApp.getUi();
  ui.alert('Hello, World!');
}

function openSidebar() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('sidebar')
    .setTitle('Hello sidebar')
    .setWidth(300);
  SlidesApp.getUi().showSidebar(htmlOutput);
}

function openDialog() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('dialog')
    .setWidth(300)
    .setHeight(200);
  SlidesApp.getUi().showModalDialog(htmlOutput, 'Hello Dialog');
}

// Function that always returns an error
function throwError() {
  Logger.log('Error in the throwError function');
  throw new Error('This is an intentional error from the backend.');
}