import {app, BrowserWindow, Menu, MenuItem, dialog} from "electron";
import * as path from "path";

let mainWindow: Electron.BrowserWindow;
let openWindows: Array<Electron.BrowserWindow>;

function aboutDialog(item: any, window: Electron.BrowserWindow, event: any) {
    dialog.showMessageBoxSync(window, {
        title: "About Chummer5E",
        message: "Chummer5E was developed by Daniel Unterholzner out of the need for a cross-platform version of Chummer5a.\n\nThe \"Chummer\" part of the name is derived from the slang word for \"friend\" in the Shadowrun universe. The 5 part of the name is in reference to the 5th Edition of Shadowrun for which this app is designed. The E part of the name is in reference to Electron, the app framework this program was created with.\n\nThis code is licensed, similarly to Chummer5a on which this project is based, with the GPL 3.0 license. You can find the information in the LICENSE file in the GitHub repository. You may distribute and re-distribute the code under this license as long as the license is distributed alongside the derivative application."
    });
}

function hide(item: any, window: Electron.BrowserWindow, event: any) {
    window.hide();
    
    openWindows.forEach((val, i, arr) => {
        val.hide();
    });
}

function unhide(item: any, window: Electron.BrowserWindow, event: any) {
    window.show();

    openWindows.forEach((val, i, arr) => {
        val.show();
    });
}

function quit(item: any, window: Electron.BrowserWindow, event: any) {
    app.quit();
}

function newCharacter(item: any, window: Electron.BrowserWindow, event: any) {

}

function openCharacter(item: any, window: Electron.BrowserWindow, event: any) {
    dialog.showOpenDialogSync(window, {
        title: "Open a character sheet",
        properties: [
            "openFile"
        ],
        filters: [
            {
                name: "Chummer5E Character Sheet",
                extensions: [
                    "c5e"
                ]
            },
            {
                name: "All Files",
                extensions: [
                    "*"
                ]
            }
        ]
    })
}

function closeCharacter(item: any, window: Electron.BrowserWindow, event: any) {

}

function closeQuit(item: any, window: Electron.BrowserWindow, event: any) {
    app.emit("window-all-closed");
}

function reportAnIssue(item: any, window: Electron.BrowserWindow, event: any) {

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

    // mainWindow.webContents.openDevTools();
    mainWindow.loadFile(path.join(__dirname, "../windows/main/index.html"));

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
                    click: hide
                },
                {
                    label: "Unhide",
                    click: unhide
                },
                {
                    type: "separator"
                },
                {
                    label: "Quit",
                    click: quit
                }
            ]
        }));
    }

    menu.append(new MenuItem({
        label: "File",
        submenu: [
            {
                label: "New Character",
                click: newCharacter,
                accelerator: "CmdOrCtrl+N"
            },
            {
                label: "Open",
                click: openCharacter,
                accelerator: "CmdOrCtrl+O"
            },
            {
                type: "separator"
            },
            {
                label: "Close Character",
                click: closeCharacter,
                accelerator: "CmdOrCtrl+W",
                enabled: false
            },
            {
                type: "separator"
            },
            {
                label: (isMac ? "Close" : "Quit"),
                click: closeQuit
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
                click: reportAnIssue
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