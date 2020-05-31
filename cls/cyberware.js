const Gear = require("./gear.js").Gear;

exports.Cyberware = class {
    constructor() {

    }

    load(cwobj) {
        this.sourceid = cwobj.sourceid[0];
        this.guid = cwobj.guid[0];
        this.name = cwobj.name[0];
        this.category = cwobj.category[0];
        this.limbslot = cwobj.limbslot[0];
        this.limbslotcount = cwobj.limbslotcount[0];
        this.inheritattributes = (cwobj.inheritattributes[0].toLowerCase() === "true");
        this.ess = cwobj.ess[0];
        this.capacity = cwobj.capacity[0];
        this.avail = cwobj.avail[0];
        this.cost = cwobj.cost[0];
        this.source = cwobj.source[0];
        this.page = cwobj.page[0];
        this.parentid = cwobj.parentid[0];
        this.hasmodularmount = cwobj.hasmodularmount[0];
        this.plugsintomoudlarmount = cwobj.plugsintomoudlarmount[0];
        this.blocksmounts = cwobj.blocksmounts[0];
        this.forced = cwobj.forced[0];
        this.rating = parseInt(cwobj.rating[0], 10);
        this.minrating = cwobj.minrating[0];
        this.maxrating = cwobj.maxrating[0];
        this.ratinglabel = cwobj.ratinglabel[0];
        this.subsystems = cwobj.subsystems[0];
        this.wirelesson = (cwobj.wirelesson[0].toLowerCase() === "true");
        this.grade = cwobj.grade[0];
        this.location = cwobj.location[0];
        this.extra = cwobj.extra[0];
        this.suite = (cwobj.suite[0].toLowerCase() === "true");
        this.stolen = (cwobj.stolen[0].toLowerCase() === "true");
        this.essdiscount = parseInt(cwobj.essdicount[0], 10);
        this.extraessadditivemultiplier = parseFloat(cwobj.extraessadditivemultiplier[0]);
        this.extraessmultiplicativemultiplier = parseFloat(cwobj.extraessmultiplicativemultiplier[0]);
        this.forcegrade = cwobj.forcegrade[0];
        this.matrixcmfilled = parseInt(cwobj.matrixcmfilled[0], 10);
        this.prototypetranshuman = (cwobj.prototypetranshuman[0].toLowerCase() === "true");
        this.bonus = cwobj.bonus[0];
        this.pairbonus = cwobj.pairbonus[0];
        this.wirelessbonus = cwobj.wirelessbonus[0];
        this.improvementsource = cwobj.improvementsource[0];
        
        if (cwobj.weaponguid) {
            this.weaponguid = cwobj.weaponguid[0];
        }

        if (cwobj.vehicleguid) {
            this.vehicleguid = cwobj.vehicleguid[0];
        }

        this.pairinclude = [];

        if (cwobj.pairinclude[0].name) {
            for (var i = 0; i < cwobj.pairinclude[0].name.length; i++) {
                this.pairinclude.push(cwobj.pairinclude[0].name[i]);
            }
        }

        this.wirelesspairinclude = [];

        if (cwobj.wirelesspairinclude[0].name) {
            for (var i = 0; i < cwobj.wirelesspairinclude[0].name.length; i++) {
                this.wirelesspairinclude.push(cwobj.wirelesspairinclude[0].name[i]);
            }
        }

        this.children = [];

        if (cwobj.children[0].cyberware) {
            for (var i = 0; i < cwobj.children[0].cyberware.length; i++) {
                var newCW = Cyberware();
                newCW.load(cwobj.children[0].children[i]);
                this.children.push(newCW);
            }
        }

        this.gears = [];

        if (cwobj.gears[0].gear) {
            for (var i = 0; i < cwobj.gears[0].gear.length; i++) {
                var newGear = Gear();
                newGear.load(cwobj.gears[0].gear[i]);
                this.gears.push(newGear);
            }
        }

        this.notes = cwobj.notes[0];
        this.discountedcost = (cwobj.discountedcost[0].toLowerCase() === "true");
        this.addtoparentess = (cwobj.addtoparentess[0].toLowerCase() === "true");
        this.addtoparentcapacity = (cwobj.addtoparentcapacity[0].toLowerCase() === "true");
        this.active = (cwobj.active[0].toLowerCase() === "true");
        this.homenode = (cwobj.homenode[0].toLowerCase() === "true");
        this.devicerating = cwobj.devicerating[0];
        this.programlimit = cwobj.programlimit[0];
        this.overclocked = cwobj.overclocked[0];
        this.attack = cwobj.attack[0];
        this.sleaze = cwobj.sleaze[0];
        this.dataprocessing = cwobj.dataprocessing[0];
        this.firewall = cwobj.firewall[0];
        this.attributearray = cwobj.attributearray[0];
        this.modattack = cwobj.modattack[0];
        this.modsleaze = cwobj.modsleaze[0];
        this.moddataprocessing = cwobj.moddataprocessing[0];
        this.modfirewall = cwobj.modfirewall[0];
        this.modattributearray = cwobj.modattributearray[0];
        this.canswapattributes = (cwobj.canswapattributes[0].toLowerCase() === "true");
        this.sortorder = parseInt(cwobj.sortorder[0], 10);
    }
}