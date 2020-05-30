exports.Tradition = class {
    constructor() {

    }

    load(tobj) {
        this.sourceid = tobj.sourceid[0];
        this.guid = tobj.guid[0];
        this.traditiontype = tobj.traditiontype[0];
        this.name = tobj.name[0];
        this.extra = tobj.extra[0];
        this.spiritform = tobj.spiritform[0];
        this.drain = tobj.drain[0];
        this.source = tobj.source[0];
        this.page = tobj.page[0];
        this.spiritcombat = tobj.spiritcombat[0];
        this.spiritdetection = tobj.spiritdetection[0];
        this.spirithealth = tobj.spirithealth[0];
        this.spiritillusion = tobj.spiritillusion[0];
        this.spiritmanipulation = tobj.spiritmanipulation[0];
        this.spirits = [];

        if (tobj.spirits[0].spirit) {
            this.spirits.push({
                spirit: tobj.spirits[0].spirit[0]
            });
        }

        if (tobj.bonus) {
            this.bonus = tobj.bonus[0];
        }
    }
}