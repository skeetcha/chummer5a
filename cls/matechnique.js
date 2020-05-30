exports.MartialArtTechnique = class {
    constructor() {

    }

    load(matobj) {
        this.sourceid = matobj.sourceid[0];
        this.guid = matobj.guid[0];
        this.name = matobj.name[0];
        this.notes = matobj.notes[0];
        this.source = matobj.source[0];
    }
}