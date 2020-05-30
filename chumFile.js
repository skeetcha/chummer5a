const fs = require("fs");
const parseString = require("xml2js").parseString;

exports.convertChumToJSON = function(filepath) {
    var charData = fs.readFileSync(filepath, "utf-8");
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
            attributes: [],
            magenabled: (result.character.magenabled[0].toLowerCase() === "true"),
            initiategrade: parseInt(result.character.initiategrade[0], 10),
            resenabled: (result.character.resenabled[0].toLowerCase() === "true"),
            submersiongrade: parseInt(result.character.submersiongrade[0], 10),
            depenabled: (result.character.depenabled[0].toLowerCase() === "true"),
            groupmember: (result.character.groupmember[0].toLowerCase() === "true"),
            groupname: result.character.groupname[0],
            groupnotes: result.character.groupnotes[0],
            totaless: parseFloat(result.character.totaless[0]),
            tradition: {
                sourceid: result.character.tradition[0].sourceid,
                guid: result.character.tradition[0].guid,
                traditiontype: result.character.tradition[0].traditiontype,
                name: result.character.tradition[0].name,
                extra: result.character.tradition[0].extra,
                spiritform: result.character.tradition[0].spiritform,
                drain: result.character.tradition[0].drain,
                source: result.character.tradition[0].source,
                page: result.character.tradition[0].page,
                spiritcombat: result.character.tradition[0].spiritcombat,
                spiritdetection: result.character.tradition[0].spiritdetection,
                spirithealth: result.character.tradition[0].spirithealth,
                spiritillusion: result.character.tradition[0].spiritillusion,
                spiritmanipulation: result.character.tradition[0].spiritmanipulation,
                spirits: result.character.tradition[0].spirits,
                bonus: result.character.tradition[0].bonus
            },
            physicalcmfilled: parseInt(result.character.physicalcmfilled[0], 10),
            stuncmfilled: parseInt(result.character.stuncmfilled[0], 10),
            newskills: {
                skillptsmax: parseInt(result.character.newskills[0].skillptsmax[0], 10),
                skillgrpsmax: parseInt(result.character.newskills[0].skillgrpsmax[0], 10),
                skills: [],
                knoskills: [],
                skilljackknowledgeskills: [],
                groups: []
            },
            contacts: [],
            spells: [],
            foci: [],
            stackedfoci: []
        };

        if (result.character.ignorerules) {
            charSettings.ignorerules = (result.character.ignorerules[0].toLowerCase() === "true");
        }

        if (result.character.iscritter) {
            charSettings.iscritter = (result.character.iscritter[0].toLowerCase() === "true");
        }

        if (result.character.possessed) {
            charSettings.possessed = (result.character.possessed[0].toLowerCase() === "true");
        }

        for (var i = 0; i < result.character.bannedwaregrades.length; i++) {
            for (var j = 0; j < result.character.bannedwaregrades[i].grade.length; j++) {
                charSettings.bannedwaregrades.push(result.character.bannedwaregrades[i].grade[j]);
            }
        }

        for (var i = 0; i < result.character.attributes[0].length; i++) {
            charSettings.attributes.push({
                name: result.character.attributes[0].attribute[i].name[0],
                metatypemin: parseInt(result.character.attributes[0].attribute[i].metatypemin[0], 10),
                metatypemax: parseInt(result.character.attributes[0].attribute[i].metatypemax[0], 10),
                metatypeaugmax: parseInt(result.character.attributes[0].attribute[i].metatypeaugmax[0], 10),
                base: parseInt(result.character.attributes[0].attribute[i].base[0], 10),
                karma: parseInt(result.character.attributes[0].attribute[i].karma[0], 10),
                metatypecategory: result.character.attributes[0].attribute[i].metatypecategory,
                totalvalue: parseInt(result.character.attributes[0].attribute[i].totalvalue, 10)
            });
        }

        if (charSettings.adept && charSettings.magenabled) {
            charSettings.magsplitadept = parseInt(result.character.magsplitadept, 10);
            charSettings.magsplitmagician = parseInt(result.character.magsplitmagician, 10);
        }

        for (var i = 0; i < result.character.newskills[0].skills[0].skill.length; i++) {
            var newSkill = {
                guid: result.character.newskills[0].skills[0].skill[i].guid[0],
                suid: result.character.newskills[0].skills[0].skill[i].suid[0],
                isknowledge: (result.character.newskills[0].skills[0].skill[i].isknowledge[0].toLowerCase() === "true"),
                skillcategory: result.character.newskills[0].skills[0].skill[i].skillcategory[0],
                karma: parseInt(result.character.newskills[0].skills[0].skill[i].karma[0], 10),
                base: parseInt(result.character.newskills[0].skills[0].skill[i].base[0], 10),
                notes: result.character.newskills[0].skills[0].skill[i].notes[0]
            };

            if (result.character.newskills[0].skills[0].skill[i].name) {
                newSkill.name = result.character.newskills[0].skills[0].skill[i].name[0];
            }

            if (result.character.newskills[0].skills[0].skill[i].specs) {
                newSkill.specs = [];

                for (var j = 0; j < result.character.newskills[0].skills[0].skill[i].specs[0].spec.length; j++) {
                    newskill.specs.push({
                        guid: result.character.newskills[0].skills[0].skill[i].specs[0].spec[j].guid[0],
                        name: result.character.newskills[0].skills[0].skill[i].specs[0].spec[j].name[0],
                        free: result.character.newskills[0].skills[0].skill[i].specs[0].spec[j].free[0]
                    });
                }
            }

            if (charSettings.created) {
                newSkill.buywithkarma = (result.character.newskills[0].skills[0].skill[i].buywithkarma[0].toLowerCase() === "true");
            }

            charSettings.newskills.skills.push(newSkill);
        }

        for (var i = 0; i < result.character.newskills[0].knoskills[0].skill.length; i++) {
            var newKnoSkill = {
                guid: result.character.newskills[0].knoskills[0].skill[i].guid[0],
                suid: result.character.newskills[0].knoskills[0].skill[i].suid[0],
                isknowledge: (result.character.newskills[0].knoskills[0].skill[i].isknowledge[0].toLowerCase() === "true"),
                skillcategory: result.character.newskills[0].knoskills[0].skill[i].skillcategory[0],
                karma: parseInt(result.character.newskills[0].knoskills[0].skill[i].karma[0], 10),
                base: parseInt(result.character.newskills[0].knoskills[0].skill[i].base[0], 10),
                notes: result.character.newskills[0].knoskills[0].skill[i].notes[0],
                name: result.character.newskills[0].knoskills[0].skill[i].name[0],
                type: result.character.newskills[0].knoskills[0].skill[i].type[0]
            };

            if (charSettings.created) {
                newKnoSkill.buywithkarma = (result.character.newskills[0].knoskills[0].skill[i].buywithkarma.toLowerCase() === "true");
            }

            if (result.character.newskills[0].knoskills[0].skill[i].specs) {
                newKnoSkill.specs = [];

                for (var j = 0; j < result.character.newskills[0].knoskills[0].skill[i].specs[0].spec.length; j++) {
                    newKnoSkill.specs.push({
                        guid: result.character.newskills[0].knoskills[0].skill[i].specs[0].spec[j].guid[0],
                        name: result.character.newskills[0].knoskills[0].skill[i].specs[0].spec[j].name[0],
                        free: result.character.newskills[0].knoskills[0].skill[i].specs[0].spec[j].free[0]
                    });
                }
            }

            if (result.character.newskills[0].knoskills[0].skill[i].forced) {
                newKnoSkill.forced = result.character.newskills[0].knoskills[0].skill[i].forced[0];
            }

            charSettings.newskills.knoskills.push(newKnoSkill);
        }

        if (result.character.newskills[0].skilljackknowledgeskills[0].skill) {
            for (var i = 0; i < result.character.newskills[0].skilljackknowledgeskills[0].skill.length; i++) {
                var newKnoSkill = {
                    guid: result.character.newskills[0].skilljackknowledgeskills[0].skill[i].guid[0],
                    suid: result.character.newskills[0].skilljackknowledgeskills[0].skill[i].suid[0],
                    isknowledge: (result.character.newskills[0].skilljackknowledgeskills[0].skill[i].isknowledge[0].toLowerCase() === "true"),
                    skillcategory: result.character.newskills[0].skilljackknowledgeskills[0].skill[i].skillcategory[0],
                    karma: parseInt(result.character.newskills[0].skilljackknowledgeskills[0].skill[i].karma[0], 10),
                    base: parseInt(result.character.newskills[0].skilljackknowledgeskills[0].skill[i].base[0], 10),
                    notes: result.character.newskills[0].skilljackknowledgeskills[0].skill[i].notes[0],
                    name: result.character.newskills[0].skilljackknowledgeskills[0].skill[i].name[0],
                    type: result.character.newskills[0].skilljackknowledgeskills[0].skill[i].type[0]
                };

                if (charSettings.created) {
                    newKnoSkill.buywithkarma = (result.character.newskills[0].skilljackknowledgeskills[0].skill[i].buywithkarma.toLowerCase() === "true");
                }

                if (result.character.newskills[0].skilljackknowledgeskills[0].skill[i].specs) {
                    newKnoSkill.specs = [];

                    for (var j = 0; j < result.character.newskills[0].skilljackknowledgeskills[0].skill[i].specs[0].spec.length; j++) {
                        newKnoSkill.specs.push({
                            guid: result.character.newskills[0].skilljackknowledgeskills[0].skill[i].specs[0].spec[j].guid[0],
                            name: result.character.newskills[0].skilljackknowledgeskills[0].skill[i].specs[0].spec[j].name[0],
                            free: result.character.newskills[0].skilljackknowledgeskills[0].skill[i].specs[0].spec[j].free[0]
                        });
                    }
                }

                if (result.character.newskills[0].skilljackknowledgeskills[0].skill[i].forced) {
                    newKnoSkill.forced = result.character.newskills[0].skilljackknowledgeskills[0].skill[i].forced[0];
                }

                charSettings.newskills.skilljackknowledgeskills.push(newKnoSkill);
            }
        }

        for (var i = 0; i < result.character.newskills[0].groups[0].group.length; i++) {
            charSettings.newskills.groups.push({
                karma: parseInt(result.character.newskills[0].groups[0].group[j].karma[0], 10),
                base: parseInt(result.character.newskills[0].groups[0].group[j].base[0], 10),
                id: result.character.newskills[0].groups[0].group[i].id[0],
                name: result.character.newskills[0].groups[0].group[i].name[0]
            });
        }

        if (result.character.contacts[0].contact) {
            for (var i = 0; i < result.character.contacts[0].contact.length; i++) {
                var newContact = {
                    name: result.character.contacts[0].contact[i].name[0],
                    role: result.character.contacts[0].contact[i].role[0],
                    location: result.character.contacts[0].contact[i].location[0],
                    connection: parseInt(result.character.contacts[0].contact[i].connection[0], 10),
                    loyalty: parseInt(result.character.contacts[0].contact[i].loyalty[0], 10),
                    metatype: result.character.contacts[0].contact[i].metatype[0],
                    sex: result.character.contacts[0].contact[i].sex[0],
                    age: result.character.contacts[0].contact[i].age[0],
                    contacttype: result.character.contacts[0].contact[i].contacttype[0],
                    preferredpayment: result.character.contacts[0].contact[i].preferredpayment[0],
                    hobbiesvice: result.character.contacts[0].contact[i].hobbiesvice[0],
                    personallife: result.character.contacts[0].contact[i].personallife[0],
                    type: result.character.contacts[0].contact[i].type[0],
                    file: result.character.contacts[0].contact[i].file[0],
                    relative: result.character.contacts[0].contact[i].relative[0],
                    notes: result.character.contacts[0].contact[i].notes[0],
                    groupname: result.character.contacts[0].contact[i].groupname[0],
                    colour: result.character.contacts[0].contact[i].colour[0],
                    group: (result.character.contacts[0].contact[i].group[0].toLowerCase() === "true"),
                    family: (result.character.contacts[0].contact[i].family[0].toLowerCase() === "true"),
                    blackmail: (result.character.contacts[0].contact[i].blackmail[0].toLowerCase() === "true"),
                    free: (result.character.contacts[0].contact[i].free[0].toLowerCase() === "true"),
                    groupenabled: (result.character.contacts[0].contact[i].groupenabled[0].toLowerCase() === "true"),
                    mainmugshotindex: parseInt(result.character.contacts[0].contact[i].mainmugshotindex[0], 10),
                    mugshots: []
                };

                if (result.character.contacts[0].contact[i].readonly) {
                    newContact.readonly = (result.character.contacts[0].contact[i].readonly[0].toLowerCase() === "true");
                }

                if (result.character.contacts[0].contact[i].guid) {
                    newContact.guid = result.character.contacts[0].contact[i].guid[0];
                }

                if (result.character.contacts[0].contact[i].mugshots[0].mugshot) {
                    for (var j = 0; j < result.character.contacts[0].contact[i].mugshots[0].mugshot.length; j++) {
                        newContact.mugshots.push(result.character.contacts[0].contact[i].mugshots[0].mugshot[j]);
                    }
                }

                charSettings.contacts.push(newContact);
            }
        }

        if (result.character.spells[0].spell) {
            for (var i = 0; i < result.character.spells[0].spell.length; i++) {
                charSettings.spells.push({
                    sourceid: result.character.spells[0].spell[i].sourceid[0],
                    guid: result.character.spells[0].spell[i].guid[0],
                    name: result.character.spells[0].spell[i].name[0],
                    descriptors: result.character.spells[0].spell[i].descriptors[0],
                    category: result.character.spells[0].spell[i].category[0],
                    type: result.character.spells[0].spell[i].type[0],
                    range: result.character.spells[0].spell[i].range[0],
                    damage: result.character.spells[0].spell[i].damage[0],
                    duration: result.character.spells[0].spell[i].duration[0],
                    dv: result.character.spells[0].spell[i].dv[0],
                    limited: (result.character.spells[0].spell[i].limited[0].toLowerCase() === "true"),
                    extended: (result.character.spells[0].spell[i].extended[0].toLowerCase() === "true"),
                    alchemical: (result.character.spells[0].spell[i].alchemical[0].toLowerCase() === "true"),
                    source: result.character.spells[0].spell[i].source[0],
                    page: result.character.spells[0].spell[i].page[0],
                    extra: result.character.spells[0].spell[i].extra[0],
                    notes: result.character.spells[0].spell[i].notes[0],
                    freebonus: (result.character.spells[0].spell[i].freebonus[0].toLowerCase() === "true"),
                    usesunarmed: (result.character.spells[0].spell[i].usesunarmed[0].toLowerCase() === "true"),
                    improvementsource: result.character.spells[0].spell[i].improvementsource[0],
                    grade: parseInt(result.character.spells[0].spell[i].grade[0], 10)
                });
            }
        }

        if (result.character.foci[0].focus) {
            for (var i = 0; i < result.character.foci[0].focus.length; i++) {
                charSettings.foci.push({
                    guid: result.character.foci[0].focus[i].guid[0],
                    gearid: result.character.foci[0].focus[i].gearid[0]
                });
            }
        }

        if (result.character.stackedfoci[0].stackedfocus) {
            for (var i = 0; i < result.character.stackedfoci[0].stackedfocus.length; i++) {
                
            }
        }

        /*fs.writeFile("C:\\Users\\piano\\Desktop\\output.json", JSON.stringify(result, null, 4), (err) => {
            if (err) {
                console.log(err);
                return;
            }
        });*/

        console.log("Imported.");
    });
}