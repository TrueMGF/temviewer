const electron = require("electron");
const {app, BrowserWindow} = electron;
const url = require("url");
const path = require("path");
let win;

app.on("ready",()=>{
    const {width,height} = electron.screen.getPrimaryDisplay().workAreaSize;
    win = new BrowserWindow({width,height,autoHideMenuBar:true,title:"temviewer - hOi!"});
    win.loadURL(url.format({pathname: path.join(__dirname, "index.html"),protocol: 'file:',slashes: true}));
    win.on("closed",()=>{win=null});
})