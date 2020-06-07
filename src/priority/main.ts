const {ipcRenderer} = require("electron");

function updateMagRes() {
    var magRes: string = (document.getElementById("magRes") as HTMLSelectElement).value;
    var magResSel: HTMLSelectElement = document.getElementById("magResSel") as HTMLSelectElement;
    var selected: number = magResSel.selectedIndex;
    magResSel.innerHTML = "";
    document.getElementById("talentText").innerHTML = "";
    document.getElementById("talent1").innerHTML = "";
    document.getElementById("talent2").innerHTML = "";
    document.getElementById("talent3").innerHTML = "";

    switch (magRes) {
        case "a":
            var magician = document.createElement("option");
            magician.setAttribute("value", "m");
            var magicianText = document.createTextNode("Magician - 6 Magic/10 Spells");
            magician.appendChild(magicianText);
            magResSel.appendChild(magician);

            var mAdept = document.createElement("option");
            mAdept.setAttribute("value", "ma");
            var mAdeptText = document.createTextNode("Mystic Adept - 6 Magic/10 Spells");
            mAdept.appendChild(mAdeptText);
            magResSel.appendChild(mAdept);

            var techno = document.createElement("option");
            techno.setAttribute("value", "t");
            var technoText = document.createTextNode("Technomancer - 6 Resonance/7 Complex Forms");
            techno.appendChild(technoText);
            magResSel.appendChild(techno);

            magResSel.disabled = false;

            if (selected > 2) {
                magResSel.selectedIndex = 0;
            }
            else {
                magResSel.selectedIndex = selected;
            }

            break;
        case "b":
            var adept = document.createElement("option");
            adept.setAttribute("value", "a");
            var adeptText = document.createTextNode("Adept - 6 Magic");
            adept.appendChild(adeptText);
            magResSel.appendChild(adept);

            var asMagician = document.createElement("option");
            asMagician.setAttribute("value", "am");
            var asMagicianText = document.createTextNode("Aspected Magician - 5 Magic");
            asMagician.appendChild(asMagicianText);
            magResSel.appendChild(asMagician);

            var magician = document.createElement("option");
            magician.setAttribute("value", "m");
            var magicianText = document.createTextNode("Magician - 4 Magic/7 Spells");
            magician.appendChild(magicianText);
            magResSel.appendChild(magician);

            var mAdept = document.createElement("option");
            mAdept.setAttribute("value", "ma");
            var mAdeptText = document.createTextNode("Mystic Adept - 4 Magic/7 Spells");
            mAdept.appendChild(mAdeptText);
            magResSel.appendChild(mAdept);

            var techno = document.createElement("option");
            techno.setAttribute("value", "t");
            var technoText = document.createTextNode("Technomancer - 4 Resonance/4 Complex Forms");
            techno.appendChild(technoText);
            magResSel.appendChild(techno);

            magResSel.disabled = false;
            
            if (selected > 4) {
                magResSel.selectedIndex = 0;
            }
            else {
                magResSel.selectedIndex = selected;
            }

            break;
        case "c":
            var adept = document.createElement("option");
            adept.setAttribute("value", "a");
            var adeptText = document.createTextNode("Adept - 4 Magic");
            adept.appendChild(adeptText);
            magResSel.appendChild(adept);

            var asMagician = document.createElement("option");
            asMagician.setAttribute("value", "am");
            var asMagicianText = document.createTextNode("Aspected Magician - 3 Magic");
            asMagician.appendChild(asMagicianText);
            magResSel.appendChild(asMagician);

            var magician = document.createElement("option");
            magician.setAttribute("value", "m");
            var magicianText = document.createTextNode("Magician - 3 Magic/5 Spells");
            magician.appendChild(magicianText);
            magResSel.appendChild(magician);

            var mAdept = document.createElement("option");
            mAdept.setAttribute("value", "ma");
            var mAdeptText = document.createTextNode("Mystic Adept - 3 Magic/5 Spells");
            mAdept.appendChild(mAdeptText);
            magResSel.appendChild(mAdept);

            var techno = document.createElement("option");
            techno.setAttribute("value", "t");
            var technoText = document.createTextNode("Technomancer - 3 Resonance/3 Complex Forms");
            techno.appendChild(technoText);
            magResSel.appendChild(techno);

            magResSel.disabled = false;

            if (selected > 4) {
                magResSel.selectedIndex = 0;
            }
            else {
                magResSel.selectedIndex = selected;
            }

            break;
        case "d":
            var adept = document.createElement("option");
            adept.setAttribute("value", "a");
            var adeptText = document.createTextNode("Adept - 2 Magic");
            adept.appendChild(adeptText);
            magResSel.appendChild(adept);

            var asMagician = document.createElement("option");
            asMagician.setAttribute("value", "am");
            var asMagicianText = document.createTextNode("Aspected Magician - 2 Magic");
            asMagician.appendChild(asMagicianText);
            magResSel.appendChild(asMagician);

            magResSel.disabled = false;

            if (selected > 2) {
                magResSel.selectedIndex = 0;
            }
            else {
                magResSel.selectedIndex = selected;
            }

            break;
        default:
            var mundane = document.createElement("option");
            mundane.setAttribute("value", "mm");
            var mundaneText = document.createTextNode("Mundane");
            mundane.appendChild(mundaneText);
            magResSel.appendChild(mundane);
            magResSel.disabled = true;
            magResSel.selectedIndex = 0;
            break;
    }

    if (magResSel.value === "am") {
        if (magRes === "d") {
            document.getElementById("talentText").innerText = "Based on your talent selection, you may choose 1 skill group(s) to start at rating 0.";
        }
        else if (magRes === "c") {
            document.getElementById("talentText").innerText = "Based on your talent selection, you may choose 1 skill group(s) to start at rating 2.";
        }
        else if (magRes == "b") {
            document.getElementById("talentText").innerText = "Based on your talent selection, you may choose 1 skill group(s) to start at rating 4.";
        }
        
        var sel = document.createElement("select");
        sel.setAttribute("id", "talent1Sel");

        var conj = document.createElement("option");
        conj.setAttribute("value", "conjuring");
        var conjText = document.createTextNode("Conjuring");
        conj.appendChild(conjText);
        sel.appendChild(conj);

        var ench = document.createElement("option");
        ench.setAttribute("value", "enchanting");
        var enchText = document.createTextNode("Enchanting");
        ench.appendChild(enchText);
        sel.appendChild(ench);

        var sorc = document.createElement("option");
        sorc.setAttribute("value", "sorcery");
        var sorcText = document.createTextNode("Sorcery");
        sorc.appendChild(sorcText);
        sel.appendChild(sorc);

        document.getElementById("talent1").appendChild(sel);
    }
    else if ((magResSel.value === "a") && (magRes !== "d")) {
        if (magRes === "c") {
            document.getElementById("talentText").innerText = "Based on your talent selection, you may choose 1 active skill(s) to start at rating 2.";
        }
        else if (magRes === "b") {
            document.getElementById("talentText").innerText = "Based on your talent selection, you may choose 1 active skill(s) to start at rating 4.";
        }

        var sel = document.createElement("select");

        ["Aeronautics Mechanic", "Alchemy", "Animal Handling", "Arcana", "Archery", "Armorer", "Artificing", "Artisan", "Assensing", "Astral Combat", "Automatics", "Automotive Mechanic", "Banishing", "Binding", "Biotechnology", "Blades", "Chemistry", "Clubs", "Computer", "Con", "Counterspelling", "Cybercombat", "Cybertechnology", "Demolitions", "Disenchanting", "Disguise", "Diving", "Electronic Warfare", "Escape Artist", "Etiquette", "Exotic Melee Weapon", "Exotic Ranged Weapon", "First Aid", "Flight", "Forgery", "Free-Fall", "Gunnery", "Gymnastics", "Hacking", "Hardware", "Heavy Weapons", "Impersonation", "Industrial Mechanic", "Instruction", "Intimidation", "Leadership", "Locksmith", "Longarms", "Medicine", "Nautical Mechanic", "Navigation", "Negotiation", "Palming", "Perception", "Performance", "Pilot Aerospace", "Pilot Aircraft", "Pilot Exotic Vehicle", "Pilot Ground Craft", "Pilot Walker", "Pilot Watercraft", "Pistols", "Ritual Spellcasting", "Running","Sneaking", "Software", "Spellcasting", "Summoning", "Survival", "Swimming", "Throwing Weapons", "Tracking", "Unarmed Combat"].forEach((val, i, arr) => {
            var opt = document.createElement("option");
            opt.setAttribute("value", val.toLowerCase().replace(" ", ""));
            var optText = document.createTextNode(val);
            opt.appendChild(optText);
            sel.appendChild(opt);
        });

        document.getElementById("talent1").appendChild(sel);
    }
    else if (((magResSel.value === "m") || (magResSel.value === "ma")) && (magRes !== "c")) {
        if (magRes === "b") {
            document.getElementById("talentText").innerText = "Based on your talent selection, you may choose 2 magic skill(s) to start at rating 4.";
        }
        else if (magRes === "a") {
            document.getElementById("talentText").innerText = "Based on your talent selection, you may choose 2 magic skill(s) to start at rating 5.";
        }

        var sel1 = document.createElement("select");
        sel1.setAttribute("id", "talent1Sel");

        var sel2 = document.createElement("select");
        sel2.setAttribute("id", "talent2Sel");

        ["Alchemy", "Arcana", "Artificing", "Assensing", "Astral Combat", "Banishing", "Binding", "Counterspelling", "Disenchanting", "Ritual Spellcasting", "Spellcasting", "Summoning"].forEach((val, i, arr) => {
            [sel1, sel2].forEach((oval, oi, oarr) => {
                var opt = document.createElement("option");
                opt.setAttribute("value", val.toLowerCase().replace(" ", ""));
                var optText = document.createTextNode(val);
                opt.appendChild(optText);
                oval.appendChild(opt);
            });
        });

        document.getElementById("talent1").appendChild(sel1);
        document.getElementById("talent2").appendChild(sel2);
    }
    else if (magResSel.value == "t") {
        if (magRes === "c") {
            document.getElementById("talentText").innerText = "Based on your talent selection, you may choose 3 resonance skill(s) to start at rating 2.";
        }
        else if (magRes === "b") {
            document.getElementById("talentText").innerText = "Based on your talent selection, you may choose 3 resonance skill(s) to start at rating 4.";
        }
        else if (magRes === "a") {
            document.getElementById("talentText").innerText = "Based on your talent selection, you may choose 3 resonance skill(s) to start at rating 5.";
        }

        var sel1 = document.createElement("select");
        sel1.setAttribute("id", "talent1Sel");

        var sel2 = document.createElement("select");
        sel2.setAttribute("id", "talent2Sel");

        var sel3 = document.createElement("select");
        sel3.setAttribute("id", "talent3Sel");

        ["Compiling", "Computer", "Cybercombat", "Decompiling", "Electronic Warfare", "Hacking", "Hardware", "Registering", "Software"].forEach((val, i, arr) => {
            [sel1, sel2, sel3].forEach((oval, oi, oarr) => {
                var opt = document.createElement("option");
                opt.setAttribute("value", val.toLowerCase().replace(" ", ""));
                var optText = document.createTextNode(val);
                opt.appendChild(optText);
                oval.appendChild(opt);
            });
        });

        document.getElementById("talent1").appendChild(sel1);
        sel1.selectedIndex = 0;
        document.getElementById("talent2").appendChild(sel2);
        sel2.selectedIndex = 1;
        document.getElementById("talent3").appendChild(sel3);
        sel3.selectedIndex = 2;
    }
}

function updateMetatype() {
    var metatypePriority: string = (document.getElementById("metatype") as HTMLSelectElement).value;
    var metatypeSelector: HTMLSelectElement = document.getElementById("metaSel") as HTMLSelectElement;
    var selected: number = metatypeSelector.selectedIndex;
    metatypeSelector.innerHTML = "";

    switch (metatypePriority) {
        case "a":
        case "b":
            var human = document.createElement("option");
            human.setAttribute("value", "h");
            var humanText = document.createTextNode("Human");
            human.appendChild(humanText);
            metatypeSelector.appendChild(human);

            var elf = document.createElement("option");
            elf.setAttribute("value", "e");
            var elfText = document.createTextNode("Elf");
            elf.appendChild(elfText);
            metatypeSelector.appendChild(elf);

            var dwarf = document.createElement("option");
            dwarf.setAttribute("value", "d");
            var dwarfText = document.createTextNode("Dwarf");
            dwarf.appendChild(dwarfText);
            metatypeSelector.appendChild(dwarf);

            var ork = document.createElement("option");
            ork.setAttribute("value", "o");
            var orkText = document.createTextNode("Ork");
            ork.appendChild(orkText);
            metatypeSelector.appendChild(ork);

            var troll = document.createElement("option");
            troll.setAttribute("value", "t");
            var trollText = document.createTextNode("Troll");
            troll.appendChild(trollText);
            metatypeSelector.appendChild(troll);

            metatypeSelector.selectedIndex = selected;
            break;
        case "c":
            var human = document.createElement("option");
            human.setAttribute("value", "h");
            var humanText = document.createTextNode("Human");
            human.appendChild(humanText);
            metatypeSelector.appendChild(human);

            var elf = document.createElement("option");
            elf.setAttribute("value", "e");
            var elfText = document.createTextNode("Elf");
            elf.appendChild(elfText);
            metatypeSelector.appendChild(elf);

            var dwarf = document.createElement("option");
            dwarf.setAttribute("value", "d");
            var dwarfText = document.createTextNode("Dwarf");
            dwarf.appendChild(dwarfText);
            metatypeSelector.appendChild(dwarf);

            var ork = document.createElement("option");
            ork.setAttribute("value", "o");
            var orkText = document.createTextNode("Ork");
            ork.appendChild(orkText);
            metatypeSelector.appendChild(ork);

            if (selected > 3) {
                metatypeSelector.selectedIndex = 0;
            }
            else {
                metatypeSelector.selectedIndex = selected;
            }

            break;
        case "d":
            var human = document.createElement("option");
            human.setAttribute("value", "h");
            var humanText = document.createTextNode("Human");
            human.appendChild(humanText);
            metatypeSelector.appendChild(human);

            var elf = document.createElement("option");
            elf.setAttribute("value", "e");
            var elfText = document.createTextNode("Elf");
            elf.appendChild(elfText);
            metatypeSelector.appendChild(elf);
            
            if (selected > 1) {
                metatypeSelector.selectedIndex = 0;
            }
            else {
                metatypeSelector.selectedIndex = selected;
            }

            break;
        default:
            var human = document.createElement("option");
            human.setAttribute("value", "h");
            var humanText = document.createTextNode("Human");
            human.appendChild(humanText);
            metatypeSelector.appendChild(human);

            metatypeSelector.selectedIndex = 0;
            break;
    }

    switch (metatypeSelector.selectedIndex) {
        case 0:
            document.getElementById("body").innerText = "1/6 (10)";
            document.getElementById("agility").innerText = "1/6 (10)";
            document.getElementById("reaction").innerText = "1/6 (10)";
            document.getElementById("strength").innerText = "1/6 (10)";
            document.getElementById("charisma").innerText = "1/6 (10)";
            document.getElementById("intuition").innerText = "1/6 (10)";
            document.getElementById("logic").innerText = "1/6 (10)";
            document.getElementById("willpower").innerText = "1/6 (10)";
            document.getElementById("qualities").innerText = "None";

            switch (metatypePriority) {
                case "a":
                    document.getElementById("specAttr").innerText = "9";
                    break;
                case "b":
                    document.getElementById("specAttr").innerText = "7";
                    break;
                case "c":
                    document.getElementById("specAttr").innerText = "5";
                    break;
                case "d":
                    document.getElementById("specAttr").innerText = "3";
                    break;
                case "e":
                    document.getElementById("specAttr").innerText = "1";
                    break;
                default:
                    document.getElementById("specAttr").innerText = "0";
                    break;
            }

            break;
        case 1:
            document.getElementById("body").innerText = "1/6 (10)";
            document.getElementById("agility").innerText = "2/7 (11)";
            document.getElementById("reaction").innerText = "1/6 (10)";
            document.getElementById("strength").innerText = "1/6 (10)";
            document.getElementById("charisma").innerText = "3/8 (12)";
            document.getElementById("intuition").innerText = "1/6 (10)";
            document.getElementById("logic").innerText = "1/6 (10)";
            document.getElementById("qualities").innerText = "Low-Light Vision";

            switch (metatypePriority) {
                case "a":
                    document.getElementById("specAttr").innerText = "8";
                    break;
                case "b":
                    document.getElementById("specAttr").innerText = "6";
                    break;
                case "c":
                    document.getElementById("specAttr").innerText = "3";
                    break;
                default:
                    document.getElementById("specAttr").innerText = "0";
                    break;
            }
            break;
        case 2:
            document.getElementById("body").innerText = "3/8 (12)";
            document.getElementById("agility").innerText = "1/6 (10)";
            document.getElementById("reaction").innerText = "1/5 (9)";
            document.getElementById("strength").innerText = "3/8 (12)";
            document.getElementById("charisma").innerText = "1/6 (10)";
            document.getElementById("intuition").innerText = "1/6 (10)";
            document.getElementById("logic").innerText = "1/6 (10)";
            document.getElementById("willpower").innerText = "2/7 (11)";
            document.getElementById("qualities").innerText = "Thermographic Vision, Resistance to Pathogens/Toxens";

            switch (metatypePriority) {
                case "a":
                    document.getElementById("specAttr").innerText = "7";
                    break;
                case "b":
                    document.getElementById("specAttr").innerText = "4";
                    break;
                case "c":
                    document.getElementById("specAttr").innerText = "1";
                    break;
                default:
                    document.getElementById("specAttr").innerText = "0";
                    break;
            }
            break;
        case 3:
            document.getElementById("body").innerText = "4/9 (13)";
            document.getElementById("agility").innerText = "1/6 (10)";
            document.getElementById("reaction").innerText = "1/6 (10)";
            document.getElementById("strength").innerText = "3/8 (12)";
            document.getElementById("charisma").innerText = "1/5 (9)";
            document.getElementById("intuition").innerText = "1/6 (10)";
            document.getElementById("logic").innerText = "1/5 (9)";
            document.getElementById("willpower").innerText = "1/6 (10)";
            document.getElementById("qualities").innerText = "Low-Light Vision";

            switch (metatypePriority) {
                case "a":
                    document.getElementById("specAttr").innerText = "7";
                    break;
                case "b":
                    document.getElementById("specAttr").innerText = "4";
                    break;
                default:
                    document.getElementById("specAttr").innerText = "0";
                    break;
            }
            break;
        case 4:
            document.getElementById("body").innerText = "5/10 (14)";
            document.getElementById("agility").innerText = "1/5 (9)";
            document.getElementById("reaction").innerText = "1/6 (10)";
            document.getElementById("strength").innerText = "5/10 (14)";
            document.getElementById("charisma").innerText = "1/4 (8)";
            document.getElementById("intuition").innerText = "1/5 (9)";
            document.getElementById("logic").innerText = "1/5 (9)";
            document.getElementById("willpower").innerText = "1/6 (10)";
            document.getElementById("qualities").innerText = "Thermographic Vision";

            switch (metatypePriority) {
                case "a":
                    document.getElementById("specAttr").innerText = "5";
                    break;
                default:
                    document.getElementById("specAttr").innerText = "0";
                    break;
            }
            break;
        default:
            break;
    }
}

window.onload = () => {
    updateMagRes();
    updateMetatype();
}

function updatePriority(id: string) {
    var el: HTMLSelectElement = document.getElementById(id) as HTMLSelectElement;
    var els: NodeListOf<Element> = document.querySelectorAll("select.priority");
    var values: Array<string> = [];
    var ids: Array<string> = [];
    var newId: string;
    
    els.forEach((val: Element, key: number, l: NodeListOf<Element>) => {
        values.push((val as HTMLSelectElement).value);
        ids.push(val.id);

        if (((val as HTMLSelectElement).value === el.value) && (val.id !== el.id)) {
            newId = val.id;
        }
    });

    ["a", "b", "c", "d", "e"].forEach((val: string, i: number, arr: Array<string>) => {
        if (values.indexOf(val) === -1) {
            (document.querySelector("select#" + newId) as HTMLSelectElement).selectedIndex = i;
        }
    });

    updateMagRes();
    updateMetatype();
}

function cancel() {
    ipcRenderer.send("newCharWindow-cancel-window", {});
}

function okay() {
    let Data = {
        priorities: {
            metatype: (document.getElementById("metatype") as HTMLSelectElement).value,
            attributes: (document.getElementById("attributes") as HTMLSelectElement).value,
            magRes: (document.getElementById("magRes") as HTMLSelectElement).value,
            skills: (document.getElementById("skills") as HTMLSelectElement).value,
            resources: (document.getElementById("resources") as HTMLSelectElement).value
        }, 
        magTalent: (document.getElementById("magResSel") as HTMLSelectElement).value,
        talentChoices: Array<string>(),
        metatype: (document.getElementById("metaSel") as HTMLSelectElement).value
    };

    if (document.querySelectorAll("select#talent1Sel").length > 0) {
        Data.talentChoices.push((document.getElementById("talent1Sel") as HTMLSelectElement).value);
    }

    if (document.querySelectorAll("select#talent2Sel").length > 0) {
        Data.talentChoices.push((document.getElementById("talent2Sel") as HTMLSelectElement).value);
    }

    if (document.querySelectorAll("select#talent3Sel").length > 0) {
        Data.talentChoices.push((document.getElementById("talent3Sel") as HTMLSelectElement).value);
    }

    ipcRenderer.send("newCharWindow-okay-window", Data);
}