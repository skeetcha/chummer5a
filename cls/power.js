const Enhancement = require("./enhancement.js").Enhancement;

exports.Power = class {
    constructor() {

    }

    load(pobj) {
        this.sourceid = pobj.sourcedid[0];
        this.guid = pobj.guid[0];
        this.name = pobj.name[0];
        this.extra = pobj.extra[0];
        this.pointsperlevel = pobj.pointsperlevel[0];
        this.adeptway = pobj.adeptway[0];
        this.action = pobj.action[0];
        this.rating = parseInt(pobj.rating[0], 10);
        this.extrapointcost = parseFloat(pobj.extrapointcost[0]);
        this.levels = (pobj.levels[0].toLowerCase() === "true");
        this.maxlevels = parseInt(pobj.maxlevels[0], 10);
        this.discounted = (pobj.discounted[0].toLowerCase() === "true");
        this.discountedgeas = (pobj.discountedgeas[0].toLowerCase() === "true");
        this.bonussource = pobj.bonussource[0];
        this.freepoints = parseFloat(pobj.freepoints[0]);
        this.source = pobj.source[0];
        this.page = pobj.page[0];
        this.bonus = pobj.bonus[0];
        this.adeptwayrequires = pobj.adeptwayrequires[0];
        this.enhancements = [];

        if (pobj.enhancements[0].enhancement) {
            for (var i = 0; i < pobj.enhancements[0].enhancement.length; i++) {
                var newEnh = Enhancement();
                newEnh.load(pobj.enhancements[0].enhancement[i]);
                this.enhancements.push(newEnh);
            }
        }

        this.notes = pobj.notes[0];
    }
}