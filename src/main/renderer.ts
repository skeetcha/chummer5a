const TabGroup = require("electron-tabs");
import {ipcRenderer} from "electron";

let tabGroup = new TabGroup({});

/*let tab1 = tabGroup.addTab({
    title: "Our Code World",
    src: "https://ourcodeworld.com",
    visible: true
});*/

ipcRenderer.on("mainWindow-add-tab", (event, args) => {
    tabGroup.addTab(args);
});