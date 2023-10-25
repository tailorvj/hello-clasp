function onOpen() {
  var ui = SlidesApp.getUi();
  ui.createMenu('Hello, World!')
    .addItem('Say Hello', 'helloWorld')
    .addItem('Open Sidebar', 'openSidebar')
    .addItem('Open Dialog', 'openDialog') // Add a menu item to open the dialog
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
