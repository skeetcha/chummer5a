const {app, BrowserWindow, Menu, dialog} = require("electron");
const fs = require("fs");
const parseString = require("xml2js").parseString;

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile("index.html");

    var menu = Menu.buildFromTemplate([
        {
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
                    label: "New Critter",
                    click: () => {
                        console.log("New Critter not implemented yet");
                    }
                },
                {
                    label: "Open",
                    click: () => {
                        var file = dialog.showOpenDialogSync(
                            {
                                properties: ["openFile"],
                                filters: [
                                    {
                                        name: "Chummer character file",
                                        extensions: ["chum5"]
                                    }
                                ]
                            }
                        )[0];
                        
                        var charData = fs.readFileSync(file, "utf-8");
                        parseString(charData, (err, result) => {
                            if (err) {
                                console.log("Could not open " + file + "\n" + err);
                                return;
                            }

                            if (result.character.gameedition !== "SR5") {
                                console.log("Incorrect game edition.");
                                return;
                            }

                            // Parse the XML doc as JSON
                        });
                    },
                    accelerator: "CmdOrCtrl+O"
                },
                {
                    type: "separator"
                },
                {
                    label: "Print",
                    click: () => {
                        console.log("Print not implemented yet");
                    },
                    accelerator: "CmdOrCtrl+P"
                },
                {
                    label: "Print Multiple",
                    click: () => {
                        console.log("Print Multiple not implemented yet");
                    }
                },
                {
                    type: "separator"
                },
                {
                    label: "Exit",
                    click: () => {
                        app.emit("window-all-closed");
                    }
                }
            ]
        },
        {
            label: "Tools",
            submenu: [
                {
                    label: "Dice Roller",
                    click: () => {
                        console.log("Dice Roller not implemented yet");
                    }
                },
                {
                    type: "separator"
                },
                {
                    label: "Options",
                    click: () => {
                        console.log("Options not implemented yet");
                    }
                },
                {
                    label: "Check for Updates",
                    click: () => {
                        console.log("Check for updates not implemented yet");
                    }
                },
                {
                    type: "separator"
                },
                {
                    label: "Hero Lab Importer",
                    click: () => {
                        console.log("Hero Lab Importer not implemented yet");
                    }
                },
                {
                    label: "Archetypes",
                    click: () => {
                        console.log("Archetypes not implemented yet");
                    }
                }
            ]
        },
        {
            label: "Help",
            submenu: [
                {
                    label: "Chummer Wiki",
                    click: () => {
                        console.log("Chummer Wiki not implemented yet");
                    },
                    accelerator: "CmdOrCtrl+F1"
                },
                {
                    label: "Chummer Discord",
                    click: () => {
                        console.log("Chummer Discord not implemented yet");
                    },
                    accelerator: "CmdOrCtrl+F2"
                },
                {
                    type: "separator"
                },
                {
                    label: "Revision History",
                    click: () => {
                        console.log("Revision History not implemented yet");
                    }
                },
                {
                    label: "Issue Tracker",
                    click: () => {
                        console.log("Issue Tracker not implemented yet");
                    }
                },
                {
                    label: "About...",
                    click: () => {
                        console.log("About... not implemented yet");
                    }
                }
            ]
        }
    ]);
    Menu.setApplicationMenu(menu);
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});