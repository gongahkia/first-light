import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      enableRemoteModule: false,
    },
  });

  // Load the React frontend (Vite or production build)
  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:5173'); // Adjust if Vite uses a different port
  } else {
    win.loadFile(path.join(__dirname, '../public/index.html'));
  }
}

// Event: ready
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Event: all windows closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// Example IPC: from renderer to main
ipcMain.handle('ping', async () => {
  return 'pong';
});