function onOpen() {
  var ui = SlidesApp.getUi();
  ui.createMenu('Hello, World!')
    .addItem('Say Hello', 'helloWorld')
    .addToUi();
}

function helloWorld() {
  Logger.log('Hello, World!');
  var ui = SlidesApp.getUi();
  ui.alert('Hello, World!');
}
