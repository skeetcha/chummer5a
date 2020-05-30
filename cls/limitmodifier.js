exports.LimitModifier = class {
    constructor() {

    }

    load(lmobj) {
        this.guid = lmobj.guid[0];
        this.name = lmobj.name[0];
        this.limit = lmobj.limit[0];
        this.bonus = parseInt(lmobj.bonus[0], 10);
        this.condition = lmobj.condition[0];
        this.candelete = (lmobj.candelete[0].toLowerCase() === "true");
        this.notes = lmobj.notes[0];
    }
}