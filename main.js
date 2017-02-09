const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
})


app.on('window-all-closed', () => {
    app.quit();
});
