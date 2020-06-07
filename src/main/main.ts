import {app, BrowserWindow, Menu, MenuItem, dialog, ipcMain} from "electron";
import * as path from "path";
import {Character} from "../cls/character";
import * as fs from "fs";

let mainWindow: Electron.BrowserWindow;
let openWindows: Map<string, Electron.BrowserWindow>;
let openCharacters: Array<Character>;

function aboutDialog(item: any, window: Electron.BrowserWindow, event: any) {
    dialog.showMessageBoxSync(window, {
        title: "About Chummer5E",
        message: "Chummer5E was developed by Daniel Unterholzner out of the need for a cross-platform version of Chummer5a.\n\nThe \"Chummer\" part of the name is derived from the slang word for \"friend\" in the Shadowrun universe. The 5 part of the name is in reference to the 5th Edition of Shadowrun for which this app is designed. The E part of the name is in reference to Electron, the app framework this program was created with.\n\nThis code is licensed, similarly to Chummer5a on which this project is based, with the GPL 3.0 license. You can find the information in the LICENSE file in the GitHub repository. You may distribute and re-distribute the code under this license as long as the license is distributed alongside the derivative application."
    });
}

function hide(item: any, window: Electron.BrowserWindow, event: any) {
    window.hide();

    openWindows.forEach((val, key, m) => {
        val.hide();
    });
}

function unhide(item: any, window: Electron.BrowserWindow, event: any) {
    window.show();

    openWindows.forEach((val, key, m) => {
        val.show();
    });
}

function quit(item: any, window: Electron.BrowserWindow, event: any) {
    app.quit();
}

function newCharacter(item: any, window: Electron.BrowserWindow, event: any) {
    var newCharWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true
        }
    });

    newCharWindow.loadFile(path.join(__dirname, "../../windows/priority/index.html"));
    newCharWindow.setMenu(null);
    openWindows.set("newCharacter", newCharWindow);
    // newCharWindow.webContents.openDevTools();

    ipcMain.on("newCharWindow-cancel-window", (event, args) => {
        newCharWindow.close();
    });

    ipcMain.on("newCharWindow-okay-window", (event, args) => {
        newCharWindow.close();
        var newChar = new Character();
        newChar.create(args);
        openCharacters.push(newChar);
        mainWindow.webContents.send("mainWindow-add-tab", {
            title: "New Character - Create Mode",
            src: path.join(__dirname, "../../windows/character/index.html"),
            visible: true,
            webPreferences: {
                nodeIntegration: true
            }
        });
    });

    newCharWindow.on("closed", () => {
        openWindows.delete("newCharacter");
    });
}

function openCharacter(item: any, window: Electron.BrowserWindow, event: any) {
    var file: string = dialog.showOpenDialogSync(window, {
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
    })[0];

    fs.readFile(file, {}, (err, data: string) => {
        if (err) {
            dialog.showErrorBox("Error: Could not open file.", "Could not open file " + file);
            return;
        }

        var jdata: Object = JSON.parse(data);
        var newChar = new Character();
        newChar.load(jdata);
        openCharacters.push(newChar);
        mainWindow.webContents.send("mainWindow-add-tab", {
            title: newChar.getName() + (newChar.isCreated() ? " - Career Mode" : " - Create Mode"),
            src: path.join(__dirname, "../../windows/character/index.html"),
            visible: true,
            active: true,
            webPreferences: {
                nodeIntegration: true,
                webviewTag: true
            }
        });
    });
}

function closeCharacter(item: any, window: Electron.BrowserWindow, event: any) {

}

function closeQuit(item: any, window: Electron.BrowserWindow, event: any) {
    app.emit("window-all-closed");
}

function reportAnIssue(item: any, window: Electron.BrowserWindow, event: any) {

}

function copyData(item: any, window: Electron.BrowserWindow, event: any) {

}

function pasteData(item: any, window: Electron.BrowserWindow, event: any) {

}

function openDiceRoller(item: any, window: Electron.BrowserWindow, event: any) {

}

function openOptions(item: any, window: Electron.BrowserWindow, event: any) {

}

function checkForUpdates(item: any, window: Electron.BrowserWindow, event: any) {

}

function changePrioritySelection(item: any, window: Electron.BrowserWindow, event: any) {

}

function changeOptionsFile(item: any, window: Electron.BrowserWindow, event: any) {

}

function checkCharacterValid(item: any, window: Electron.BrowserWindow, event: any) {

}

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true,
            preload: path.join(__dirname, "../../dist/main/preload.js")
        }
    });

    // mainWindow.webContents.openDevTools();
    mainWindow.loadFile(path.join(__dirname, "../../windows/main/index.html"));

    mainWindow.on("closed", () => {
        openWindows.forEach((val, key, m) => {
            val.close();
        });

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
                    label: "Preferences",
                    click: openOptions,
                    accelerator: "CmdOrCtrl+,"
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

    if (isMac) {
        menu.append(new MenuItem({
            label: "Edit",
            submenu: [
                {
                    label: "Copy",
                    click: copyData,
                    accelerator: "CmdOrCtrl+C"
                },
                {
                    label: "Paste",
                    click: pasteData,
                    accelerator: "CmdOrCtrl+V"
                }
            ]
        }));
    }
    else {
        menu.append(new MenuItem({
            label: "Edit",
            submenu: [
                {
                    label: "Copy",
                    click: () => mainWindow.webContents.openDevTools(),
                    accelerator: "CmdOrCtrl+C"
                },
                {
                    label: "Paste",
                    click: pasteData,
                    accelerator: "CmdOrCtrl+V"
                },
                {
                    label: "Preferences",
                    click: openOptions,
                    accelerator: "CmdOrCtrl+,"
                }
            ]
        }));
    }

    menu.append(new MenuItem({
        label: "Tools",
        submenu: [
            {
                label: "Dice Roller",
                click: openDiceRoller
            },
            {
                label: "Change Priority Selection",
                click: changePrioritySelection
            },
            {
                label: "Change Options File",
                click: changeOptionsFile
            },
            {
                label: "Check Character Validity",
                click: checkCharacterValid
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
            },
            {
                label: "Check for Updates",
                click: checkForUpdates
            }
        ]
    }));

    Menu.setApplicationMenu(menu);
    openWindows = new Map<string, Electron.BrowserWindow>();
    openCharacters = new Array<Character>();
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        openWindows.forEach((val, key, m) => {
            val.close();
        });

        app.quit();
    }
    else {
        openWindows.forEach((val, key, m) => {
            val.close();
        });

        openWindows.clear();
        mainWindow.close();
        mainWindow = null;
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});