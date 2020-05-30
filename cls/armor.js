const ArmorMod = require("./armormod.js").ArmorMod;
const Gear = require("./gear.js").Gear;

exports.Armor = class {
    constructor() {

    }

    load(aobj) {
        this.sourceid = aobj.sourceid[0];
        this.guid = aobj.guid[0];
        this.name = aobj.name[0];
        this.category = aobj.category[0];
        this.armor = aobj.armor[0];
        this.armoroverride = aobj.armoroverride[0];
        this.armorcapacity = aobj.armorcapacity[0];
        this.avail = aobj.avail[0];
        this.cost = aobj.cost[0];
        this.source = aobj.source[0];
        this.page = aobj.page[0];
        this.armorname = aobj.armorname[0];
        this.equipped = (aobj.equipped[0].toLowerCase() === "true");
        this.wirelesson = (aobj.wirelesson[0].toLowerCase() === "true");
        this.extra = aobj.extra[0];
        this.damage = parseInt(aobj.damage[0], 10);
        this.rating = parseInt(aobj.rating[0], 10);
        this.maxrating = parseInt(aobj.maxrating[0], 10);
        this.ratinglabel = aobj.ratinglabel[0];
        this.stolen = (aobj.stolen[0].toLowerCase() === "true");
        this.encumbrance = (aobj.encumbrance[0].toLowerCase() === "true");
        this.armormods = [];

        if (aobj.armormods[0].armormod) {
            for (var i = 0; i < aobj.armormods[0].armormod.length; i++) {
                var newAMod = ArmorMod();
                newAMod.load(aobj.armormods[0].armormod[i]);
                this.armormods.push(newAMod);
            }
        }

        this.gears = [];

        if (aobj.gears) {
            if (aobj.gears[0].gear) {
                for (var i = 0; i < aobj.gears[0].gear.length; i++) {
                    var newGear = Gear();
                    newGear.load(aobj.gears[0].gear[i]);
                    this.gears.push(newGear);
                }
            }
        }

        this.bonus = aobj.bonus[0];
        this.wirelessbonus = aobj.wirelessbonus[0];
        this.location = aobj.location[0];
        this.notes = aobj.notes[0];
        this.discountedcost = (aobj.discountedcost[0].toLowerCase() === "true");
        
        if (aobj.weaponguid) {
            this.weaponguid = aobj.weaponguid[0];
        }

        this.sortorder = parseInt(aobj.sortorder[0], 10);
    }
}