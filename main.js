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

                            if (result.character.gameedition[0] !== "SR5") {
                                console.log("Incorrect game edition.");
                                return;
                            }

                            // Parse the XML doc as JSON
                            var settingsFile = result.character.settings;
                            var charSettings = {
                                metatype: result.character.metatype[0],
                                metatypeid: result.character.metatypeid[0],
                                metatypebp: parseInt(result.character.metatypebp[0], 10),
                                metavariant: result.character.metavariant[0],
                                metavariantid: result.character.metavariantid[0],
                                metatypecategory: result.character.metatypecategory[0],
                                movement: result.character.movement[0],
                                walk: result.character.walk[0],
                                run: result.character.run[0],
                                sprint: result.character.sprint[0],
                                walkalt: result.character.walkalt[0],
                                runalt: result.character.runalt[0],
                                sprintalt: result.character.sprintalt[0],
                                initiativedice: parseInt(result.character.initiativedice[0], 10),
                                prioritymetatype: result.character.prioritymetatype[0],
                                priorityattributes: result.character.priorityattributes[0],
                                priorityspecial: result.character.priorityspecial[0],
                                priorityskills: result.character.priorityskills[0],
                                priorityresources: result.character.priorityresources[0],
                                prioritytalent: result.character.prioritytalent[0],
                                priorityskills: result.character.priorityskills[1],
                                essenceatspecialstart: parseFloat(result.character.essenceatspecialstart[0]),
                                name: result.character.name[0],
                                mainmugshotindex: result.character.mainmugshotindex[0],
                                mugshots: result.character.mugshots[0],
                                sex: result.character.sex[0],
                                age: result.character.age[0],
                                eyes: result.character.eyes[0],
                                height: result.character.height[0],
                                weight: result.character.weight[0],
                                skin: result.character.skin[0],
                                hair: result.character.hair[0],
                                description: result.character.description[0],
                                background: result.character.background[0],
                                concept: result.character.concept[0],
                                notes: result.character.notes[0],
                                alias: result.character.alias[0],
                                playername: result.character.playername[0],
                                gamenotes: result.character.gamenotes[0],
                                primaryarm: result.character.primaryarm[0],
                                ignorerules: (result.character.ignorerules[0].toLowerCase() === "true"),
                                iscritter: (result.character.iscritter[0].toLowerCase() === "true"),
                                possessed: (result.character.possessed[0].toLowerCase() === "true"),
                                karma: result.character.karma[0],
                                special: result.character.special[0],
                                totalspecial: result.character.special[0],
                                totalattributes: result.character.totalattributes[0],
                                contactpoints: result.character.contactpoints[0],
                                contactpointsused: result.character.contactpointsused[0],
                                spellimit: result.character.spelllimit[0],
                                cfplimit: result.character.cfplimit[0],
                                ainormalprogramlimit: result.character.ainormalprogramlimit[0],
                                aiadvancedprogramlimit: result.character.aiadvancedprogramlimit[0],
                                currentcounterspellingdice: result.character.currentcounterspellingdice[0],
                                streetcred: result.character.streetcred[0],
                                notoriety: result.character.notoriety[0],
                                publicawareness: result.character.publicawareness[0],
                                burntstreetcred: result.character.burntstreetcred[0],
                                created: (result.character.created[0].toLowerCase() === "true"),
                                maxavail: parseInt(result.character.maxavail[0], 10),
                                nuyen: parseFloat(result.character.nuyen[0]),
                                startingnuyen: parseFloat(result.character.startingnuyen[0]),
                                sumtoten: parseInt(result.character.sumtoten[0], 10),
                                buildkarma: parseInt(result.character.buildkarma[0], 10),
                                buildmethod: result.character.buildmethod[0],
                                gameplayoption: result.character.gameplayoption[0],
                                gameplayoptionqualitylimit: parseInt(result.character.gameplayoptionqualitylimit[0], 10),
                                maxnuyen: parseFloat(result.character.maxnuyen[0]),
                                maxkarma: parseInt(result.character.maxkarma[0], 10),
                                contactmultiplier: parseInt(result.character.contactmultiplier[0], 10),
                                bannedwaregrades: [],
                                nuyenbp: parseFloat(result.character.nuyenbp[0]),
                                nuyenmaxbp: parseFloat(result.character.nuyenmaxbp[0]),
                                adept: (result.character.adept[0].toLowerCase() === "true"),
                                magician: (result.character.magician[0].toLowerCase() === "true"),
                                technomancer: (result.character.technomancer[0].toLowerCase() === "true"),
                                ai: (result.character.ai[0].toLowerCase() === "true"),
                                cyberwaredisabled: (result.character.cyberwaredisabled[0].toLowerCase() === "true"),
                                initiationdisabled: (result.character.initiationdisabled[0].toLowerCase() === "true"),
                                critter: (result.character.critter[0].toLowerCase() === "true"),
                                prototypetranshuman: parseFloat(result.character.prototypetranshuman[0]),
                                attributes: []
                            };

                            for (var i = 0; i < result.character.bannedwaregrades.length; i++) {
                                for (var j = 0; j < result.character.bannedwaregrades[i].grade.length; j++) {
                                    charSettings.bannedwaregrades.push(result.character.bannedwaregrades[i].grade[j]);
                                }
                            }

                            for (var i = 0; i < result.character.attributes.length; i++) {
                                for (var j = 0; j < result.character.attributes[i].attribute.length; j++) {
                                    charSettings.attributes.push({
                                        name: result.character.attributes[i].attribute[j].name
                                    });
                                }
                            }

                            /*fs.writeFile("D:\\Desktop\\output.json", JSON.stringify(result, null, 4), (err) => {
                                if (err) {
                                    console.log(err);
                                    return;
                                }
                            });*/

                            console.log("Imported.");
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