const electron = require('electron');
const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow {
  // options have not been passed to constructor here
  // the reason being our options are fixed and do not vary for this App
  // If we were to create many instances of mainWindows,
  // we should go with:
  /*
    constructor(options) {
      super(options);
  }
  */
  constructor(url) {
    super({
      width: 300,
      height: 500,
      frame: false,
      resizable: false,
      show: false,
      webPreferences: {
        backgroundThrottling: false,
        nodeIntegration: true
      }
    });

    this.loadURL(url);
    this.on('blur', this.onBlur.bind(this));
  }

  onBlur() {
    // on blur away from the app window, hide the window
    this.hide();
  }
}

module.exports = MainWindow;
