exports.Gear = class {
    constructor() {

    }

    load(gobj) {
        this.sourceid = gobj.sourceid[0];
        this.guid = gobj.guid[0];
        this.name = gobj.name[0];
        this.category = gobj.category[0];
        this.capacity = gobj.capacity[0];
        this.armorcapacity = gobj.armorcapacity[0];
        this.minrating = gobj.minrating[0];
        this.maxrating = gobj.maxrating[0];
        this.rating = parseInt(gobj.rating[0], 10);
        this.qty = parseFloat(gobj.qty[0]);
        this.avail = gobj.avail[0];

        if (gobj.costfor) {
            this.costfor = parseFloat(gobj.costfor[0]);
        }

        this.cost = gobj.cost[0];
        this.extra = gobj.extra[0];
        this.bonded = (gobj.bonded[0].toLowerCase() === "true");
        this.equipped = (gobj.equipped[0].toLowerCase() === "true");
        this.wirelesson = (gobj.wirelesson[0].toLowerCase() === "true");
        this.stolen = (gobj.stolen[0].toLowerCase() === "true");

        if (gobj.weaponguid) {
            this.weaponguid = gobj.weaponguid[0];
        }

        this.bonus = gobj.bonus[0];
        this.wirelessbonus = gobj.wirelessbonus[0];
        this.source = gobj.source[0];
        this.page = gobj.page[0];
        this.canformpersona = gobj.canformpersona[0];
        this.devicerating = gobj.devicerating[0];
        this.gearname = gobj.gearname[0];
        this.forcedvalue = gobj.forcedvalue[0];
        this.matrixcmfilled = parseInt(gobj.matrixcmfilled[0], 10);
        this.matrixcmbonus = parseInt(gobj.matrixcmbonus[0], 10);
        this.parentid = gobj.parentid[0];
        this.allowrename = (gobj.allowrename[0].toLowerCase() === "true");
        
        if (gobj.childcostmultiplier) {
            this.childcostmultiplier = parseInt(gobj.childcostmultiplier[0], 10);
        }

        if (gobj.childavailmodifier) {
            this.childavailmodifier = parseInt(gobj.childavailmodifier[0], 10);
        }

        this.children = [];

        if (gobj.children[0].gear) {
            var newGear = Gear();
            newGear.load(gobj.children[0].gear);
            this.children.push(newGear);
        }

        this.location = gobj.location[0];
        this.notes = gobj.notes[0];
        this.discountedcost = (gobj.discountedcost[0].toLowerCase() === "true");
        this.programlimit = gobj.programlimit[0];
        this.overclocked = gobj.overclocked[0];
        this.attack = gobj.attack[0];
        this.sleaze = gobj.sleaze[0];
        this.dataprocessing = gobj.dataprocessing[0];
        this.firewall = gobj.firewall[0];
        this.attributearray = gobj.attributearray[0];
        this.modattack = gobj.modattack[0];
        this.modsleaze = gobj.modsleaze[0];
        this.moddataprocessing = gobj.moddataprocessing[0];
        this.modfirewall = gobj.modfirewall[0];
        this.modattributearray = gobj.modattributearray[0];
        this.canswapattributes = (gobj.canswapattributes[0].toLowerCase() === "true");
        this.active = (gobj.active[0].toLowerCase() === "true");
        this.homenode = (gobj.homenode[0].toLowerCase() === "true");
        this.sortorder = parseInt(gobj.sortorder[0], 10);
    }
}