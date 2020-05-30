exports.AIProgram = class {
    constructor() {

    }

    load(aipobj) {
        this.sourceid = aipobj.sourceid[0];
        this.guid = aipobj.guid[0];
        this.name = aipobj.name[0];
        this.requiresprogram = aipobj.requiresprogram[0];
        this.extra = aipobj.extra[0];
        this.source = aipobj.source[0];
        this.page = aipobj.page[0];
        this.notes = aipobj.notes[0];
        this.isadvancedprogram = (aipobj.isadvancedprogram[0].toLowerCase() === "true");
    }
}