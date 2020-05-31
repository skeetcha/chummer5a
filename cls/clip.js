exports.Clip = class {
    constructor() {

    }

    load(cobj) {
        this.name = cobj.name[0];
        this.id = cobj.id[0];
        this.count = cobj.count[0];
    }
}