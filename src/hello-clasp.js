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