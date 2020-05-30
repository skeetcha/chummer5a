exports.Spell = class {
    constructor() {

    }

    load(sobj) {
        this.sourceid = sobj.sourceid[0];
        this.guid = sobj.guid[0];
        this.name = sobj.name[0];
        this.descriptors = sobj.descriptors[0];
        this.category = sobj.category[0];
        this.type = sobj.type[0];
        this.range = sobj.range[0];
        this.damage = sobj.damage[0];
        this.duration = sobj.duration[0];
        this.dv = sobj.dv[0];
        this.limited = (sobj.limited[0].toLowerCase() === "true");
        this.extended = (sobj.extended[0].toLowerCase() === "true");
        this.alchemical = (sobj.alchemical[0].toLowerCase() === "true");
        this.source = sobj.source[0];
        this.page = sobj.page[0];
        this.extra = sobj.extra[0];
        this.notes = sobj.notes[0];
        this.freebonus = (sobj.freebonus[0].toLowerCase() === "true");
        this.usesunarmed = (sobj.usesunarmed[0].toLowerCase() === "true");
        this.improvementsource = sobj.improvementsource[0];
        this.grade = parseInt(sobj.grade[0], 10);
    }
}