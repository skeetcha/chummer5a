const Gear = require("./gear.js").Gear;

exports.ArmorMod = class {
    constructor() {

    }

    load(amobj) {
        this.sourceid = amobj.sourceid[0];
        this.guid = amobj.guid[0];
        this.name = amobj.name[0];
        this.category = amobj.category[0];
        this.armor = parseInt(amobj.armor[0], 10);
        this.armorcapacity = amobj.armorcapacity[0];
        this.gearcapacity = amobj.gearcapacity[0];
        this.maxrating = parseInt(amobj.maxrating[0], 10);
        this.rating = parseInt(amobj.rating[0], 10);
        this.ratinglabel = amobj.ratinglabel[0];
        this.avail = amobj.avail[0];
        this.cost = amobj.cost[0];
        this.gears = [];

        if (amobj.gears[0].gear) {
            for (var i = 0; i < amobj.gears[0].gear.length; i++) {
                var newGear = Gear();
                newGear.load(amobj.gears[0].gear[i]);
                this.gears.push(newGear);
            }
        }

        this.bonus = amobj.bonus[0];
        this.wirelessbonus = amobj.wirelessbonus[0];
        this.wirelesson = (amobj.wirelesson[0].toLowerCase() === "true");
        this.source = amobj.source[0];
        this.page = amobj.page[0];
        this.included = (amobj.included[0].toLowerCase() === "true");
        this.equipped = (amobj.equipped[0].toLowerCase() === "true");
        this.extra = amobj.extra[0];
        this.stolen = (amobj.stolen[0].toLowerCase() === "true");
        
        if (amobj.weaponguid) {
            this.weaponguid = amobj.weaponguid[0];
        }

        this.notes = amobj.notes[0];
        this.discountedcost = (amobj.discountedcost[0].toLowerCase() === "true");
        this.sortorder = parseInt(amobj.sortorder[0], 10);
    }
}