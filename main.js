const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        width: 400,
        height: 250,
    });

    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
})


app.on('window-all-closed', () => {
    app.quit();
});
