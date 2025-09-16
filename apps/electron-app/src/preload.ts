import { contextBridge, ipcRenderer } from 'electron';

// Expose a safe API to the renderer process
contextBridge.exposeInMainWorld('api', {
  ping: async (): Promise<string> => {
    return await ipcRenderer.invoke('ping');
  }
});