exports.Enhancement = class {
    constructor() {

    }

    load(eobj) {
        this.sourceid = eobj.sourceid[0];
        this.guid = eobj.guid[0];
        this.name = eobj.name[0];
        this.source = eobj.source[0];
        this.page = eobj.page[0];
        this.grade = parseInt(eobj.grade[0], 10);
        this.bonus = eobj.bonus[0];
        this.improvementsource = eobj.improvementsource[0];
        this.notes = eobj.notes[0];
    }
}