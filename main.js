const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 850,
    minWidth: 900,
    minHeight: 600,
    backgroundColor: '#f3f4f6',
    icon: path.join(__dirname, 'icono.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  const filePath = process.argv.find(arg => arg.endsWith('.pdf'));
  if (filePath) {
    mainWindow.loadFile('index.html', { query: { file: filePath } });
  } else {
    mainWindow.loadFile('index.html');
  }

  mainWindow.setMenuBarVisibility(false);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
