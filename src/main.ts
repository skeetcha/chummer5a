import {app, BrowserWindow, Menu, MenuItem, dialog} from "electron";
import * as path from "path";

let mainWindow: Electron.BrowserWindow;

function aboutDialog(item: any, window: Electron.BrowserWindow, event: any) {
    dialog.showMessageBoxSync(window, {
        title: "About Chummer5E",
        message: "Chummer5E was developed by Daniel Unterholzner out of the need for a cross-platform version of Chummer5a.\n\nThe \"Chummer\" part of the name is derived from the slang word for \"friend\" in the Shadowrun universe. The 5 part of the name is in reference to the 5th Edition of Shadowrun for which this app is designed. The E part of the name is in reference to Electron, the app framework this program was created with.\n\nThis code is licensed, similarly to Chummer5a on which this project is based, with the GPL 3.0 license. You can find the information in the LICENSE file in the GitHub repository. You may distribute and re-distribute the code under this license as long as the license is distributed alongside the derivative application."
    });
}

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true,
            preload: path.join(__dirname, "preload.js")
        }
    });

    mainWindow.loadFile(path.join(__dirname, "../index.html"));

    mainWindow.on("closed", () => {
        mainWindow = null;
    });

    const isMac = process.platform === "darwin";
    const menu: Electron.Menu = new Menu();
    
    if (isMac) {
        menu.append(new MenuItem({
            label: app.name,
            submenu: [
                {
                    label: "About",
                    click: aboutDialog
                },
                {
                    type: "separator"
                },
                {
                    label: "Hide",
                    click: () => {
                        console.log("Hide not implemented yet");
                    }
                },
                {
                    label: "Unhide",
                    click: () => {
                        console.log("Unhide not implemented");
                    }
                },
                {
                    type: "separator"
                },
                {
                    label: "Quit",
                    click: () => {
                        app.quit();
                    }
                }
            ]
        }));
    }

    menu.append(new MenuItem({
        label: "File",
        submenu: [
            {
                label: "New Character",
                click: () => {
                    console.log("New Character not implemented yet");
                },
                accelerator: "CmdOrCtrl+N"
            },
            {
                label: "Open",
                click: () => {
                    console.log("Open not implemented yet");
                },
                accelerator: "CmdOrCtrl+O"
            },
            {
                type: "separator"
            },
            {
                label: "Close Character",
                click: () => {

                },
                accelerator: "CmdOrCtrl+W",
                enabled: false
            },
            {
                type: "separator"
            },
            {
                label: (isMac ? "Close" : "Quit"),
                click: () => {
                    app.emit("window-all-closed");
                }
            }
        ]
    }));

    menu.append(new MenuItem({
        label: "Help",
        submenu: [
            (isMac ? {} : {
                label: "About",
                click: aboutDialog
            }),
            {
                label: "Report an Issue",
                click: () => {
                    console.log("Report an Issue not implemented yet");
                }
            }
        ]
    }));

    Menu.setApplicationMenu(menu);
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
    else {
        mainWindow.close();
        mainWindow = null;
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});