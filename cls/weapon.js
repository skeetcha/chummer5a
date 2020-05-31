const Clip = require("./clip.js").Clip;
const WeaponAccesory = require("./weaponaccessory.js").WeaponAccessory;

exports.Weapon = class {
    constructor() {

    }

    load(wobj) {
        this.sourceid = wobj.sourceid[0];
        this.guid = wobj.guid[0];
        this.name = wobj.name[0];
        this.category = wobj.category[0];
        this.type = wobj.type[0];
        this.spec = wobj.spec[0];
        this.spec2 = wobj.spec2[0];
        this.reach = parseInt(wobj.reach[0], 10);
        this.damage = wobj.damage[0];
        this.ap = wobj.ap[0];
        this.mode = wobj.mode[0];
        this.rc = wobj.rc[0];
        this.amo = wobj.ammo[0];
        this.cyberware = (wobj.cyberware[0].toLowerCase() === "true");
        this.ammocategory = wobj.ammocategory[0];
        this.ammoname = wobj.ammoname[0];
        this.ammoslots = parseInt(wobj.ammoslots[0], 10);
        this.sizecategory = wobj.sizecategory[0];
        this.firingmode = wobj.firingmode[0];
        this.minrating = wobj.minrating[0];
        this.maxrating = wobj.maxrating[0];
        this.rating = wobj.rating[0];
        this.clips = [];

        if (wobj.clips[0].clip) {
            for (var i = 0; i < wobj.clips[0].clip.length; i++) {
                var newClip = Clip();
                newClip.load(wobj.clips[0].clip[i]);
                this.clips.push(newClip);
            }
        }

        this.conceal = parseInt(wobj.conceal[0], 10);
        this.avail = wobj.avail[0];
        this.cost = wobj.cost[0];
        this.useskill = wobj.useskill[0];
        this.useskillspec = wobj.useskillspec[0];
        this.range = wobj.range[0];
        this.alternaterange = wobj.alternaterange[0];
        this.rangemultiply = parseFloat(wobj.rangemultiply[0]);
        this.singleshot = parseInt(wobj.singleshot[0], 10);
        this.shortburst = parseInt(wobj.shortburst[0]);
        this.longburst = parseInt(wobj.longburst[0], 10);
        this.fullburst = parseInt(wobj.fullburst[0], 10);
        this.suppressive = parseInt(wobj.suppressive[0], 10);
        this.allowsingleshot = (wobj.allowsingleshot[0].toLowerCase() === "true");
        this.allowshortburst = (wobj.allowshortburst[0].toLowerCase() === "true");
        this.allowlongburst = (wobj.allowlongburst[0].toLowerCase() === "true");
        this.allowfullburst = (wobj.allowfullburst[0].toLowerCase() === "true");
        this.allowsuppressive = (wobj.allowsuppressive[0].toLowerCase() === "true");
        this.source = wobj.source[0];
        this.page = wobj.page[0];
        this.parentid = wobj.parentid[0];
        this.allowaccessory = (wobj.allowaccesory[0].toLowerCase() === "true");
        this.weaponname = wobj.weaponname[0];
        this.included = (wobj.included[0].toLowerCase() === "true");
        this.equipped = (wobj.equipped[0].toLowerCase() === "true");
        this.requireammo = (wobj.requireammo[0].toLowerCase() === "true");
        this.accuracy = wobj.accuracy[0];
        this.mount = wobj.mount[0];
        this.stolen = (wobj.stolen[0].toLowerCase() === "true");
        this.extramount = wobj.extramount[0];
        this.accesories = [];

        if (wobj.accessories) {
            if (wobj.accessories[0].accessory) {
                for (var i = 0; i < wobj.accessories[0].accesory.length; i++) {
                    var newAcc = WeaponAccesory();
                    newAcc.load(wobj.accessories[0].accessory[i]);
                    this.accessories.push(newAcc);
                }
            }
        }

        this.underbarrel = [];

        if (wobj.underbarrel) {
            for (var i = 0; i < wobj.underbarrel.length; i++) {
                var newUB = Weapon();
                newUB.load(wobj.underbarrel[i]);
                this.underbarrel.push(newUB);
            }
        }

        this.location = wobj.location[0];
        this.notes = wobj.notes[0];
        this.discountedcost = (wobj.discountedcost[0].toLowerCase() === "true");
        this.weaponslots = wobj.weaponslots[0];
        this.doubledcostweaponslots = wobj.doubledcostweaponslots[0];
        this.active = (wobj.active[0].toLowerCase() === "true");
        this.homenode = (wobj.homenode[0].toLowerCase() === "true");
        this.devicerating = wobj.devicerating[0];
        this.programlimit = wobj.programlimit[0];
        this.overclocked = wobj.overclocked[0];
        this.attack = wobj.attack[0];
        this.sleaze = wobj.sleaze[0];
        this.dataprocessing = wobj.dataprocessing[0];
        this.firewall = wobj.firewall[0];
        this.attributearray = wobj.attributearray[0];
        this.modattack = wobj.modattack[0];
        this.modsleaze = wobj.modsleaze[0];
        this.moddataprocessing = wobj.moddataprocessing[0];
        this.modfirewall = wobj.modfirewall[0];
        this.modattributearray = wobj.modattributearray[0];
        this.canswapattributes = (wobj.canswapattributes[0].toLowerCase() === "true");
        this.matrixcmfilled = parseInt(wobj.matrixcmfilled[0], 10);
        this.wirelessbonus = wobj.wirelessbonus[0];
        this.wirelesson = (wobj.wirelesson[0].toLowerCase() === "true");
        this.sortorder = parseInt(wobj.sortorder[0], 10);
    }
}