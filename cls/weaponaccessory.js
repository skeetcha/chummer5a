const Gear = require("./gear.js").Gear;

exports.WeaponAccessory = class {
    constructor() {

    }

    load(waobj) {
        this.sourceid = waobj.sourceid[0];
        this.guid = waobj.guid[0];
        this.name = waobj.name[0];
        this.mount = waobj.mount[0];
        this.extramount = waobj.extramount[0];
        this.rc = waobj.rc[0];
        this.maxrating = parseInt(waobj.maxrating[0], 10);
        this.rating = parseInt(waobj.rating[0], 10);
        this.ratinglabel = waobj.ratinglabel[0];
        this.rcgroup = parseInt(waobj.rcgroup[0], 10);
        this.rcdeployable = (waobj.rcdeployable[0].toLowerCase() === "true");
        this.specialmodification = (waobj.specialmodification[0].toLowerCase() === "true");
        this.conceal = waobj.conceal[0];

        if (waobj.dicepool) {
            this.dicepool = waobj.dicepool[0];
        }

        this.avail = waobj.avail[0];
        this.cost = waobj.cost[0];
        this.included = (waobj.included[0].toLowerCase() === "true");
        this.equipped = (waobj.equipped[0].toLowerCase() === "true");
        this.source = waobj.source[0];
        this.page = waobj.page[0];
        this.accuracy = parseInt(waobj.accuracy[0], 10);
        this.gears = [];

        if (waobj.gears) {
            if (waobj.gears[0].gear) {
                for (var i = 0; i < waobj.gears[0].gear.length; i++) {
                    var newGear = Gear();
                    newGear.load(waobj.gears[0].gear[i]);
                    this.gears.push(newGear);
                }
            }
        }

        this.ammoreplace = waobj.ammoreplace[0];
        this.ammoslots = parseInt(waobj.ammoslots[0], 10);
        this.modifyammocapacity = waobj.modifyammocapacity[0];
        this.damagetype = waobj.damagetype[0];
        this.damage = waobj.damage[0];
        this.damagereplace = waobj.damagereplace[0];
        this.firemode = waobj.firemode[0];
        this.firemodereplace = waobj.firemodereplace[0];
        this.ap = waobj.ap[0];
        this.apreplace = waobj.apreplace[0];
        this.notes = waobj.notes[0];
        this.discountedcost = (waobj.discountedcost[0].toLowerCase() === "true");
        this.addmode = waobj.addmode[0];
        this.singleshot = parseInt(waobj.singleshot[0], 10);
        this.shortburst = parseInt(waobj.shortburst[0], 10);
        this.longburst = parseInt(waobj.longburst[0], 10);
        this.fullburst = parseInt(waobj.fullburst[0], 10);
        this.suppressive = parseInt(waobj.suppressive[0], 10);
        this.rangebonus = parseInt(waobj.rangebonus[0], 10);
        this.rangemodifier = parseIn(waobj.rangemodifier[0], 10);
        this.extra = waobj.extra[0];
        this.ammobonus = parseInt(waobj.ammobonus[0], 10);
        this.wirelesson = (waobj.wirelesson[0].toLowerCase() === "true");
        this.wirelessbonus = waobj.wirelessbonus[0];
        this.stolen = (waobj.stolen[0].toLowerCase() === "true");
        this.sortorder = parseInt(waobj.sortorder[0], 10);
    }
}