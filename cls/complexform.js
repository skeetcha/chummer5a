exports.ComplexForm = class {
    constructor() {

    }

    load(cfobj) {
        this.sourceid = cfobj.sourceid[0];
        this.guid = cfobj.guid[0];
        this.name = cfobj.name[0];
        this.target = cfobj.target[0];
        this.duration = cfobj.duration[0];
        this.fv = cfobj.fv[0];
        this.extra = cfobj.extra[0];
        this.source = cfobj.source[0];
        this.page = cfobj.page[0];
        this.notes = cfobj.notes[0];
        this.grade = parseInt(cfobj.grade[0], 10);
    }
}