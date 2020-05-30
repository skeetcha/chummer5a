exports.Spirit = class {
    constructor() {

    }

    saveMugshots(sobj) {
        this.mainmugshotindex = parseInt(sobj.mainmugshotindex[0], 10);
        this.mugshots = [];

        if (sobj.mugshots[0].mugshot) {
            for (var i = 0; i < sobj.mugshots[0].mugshot.length; i++) {
                this.mugshots.push(sobj.mugshots[0].mugshot[i]);
            }
        }
    }

    load(sobj) {
        this.guid = sobj.guid[0];
        this.name = sobj.name[0];
        this.crittername = sobj.crittername[0];
        this.services = parseInt(sobj.services[0], 10);
        this.force = parseInt(sobj.force[0], 10);
        this.bound = (sobj.bound[0].toLowerCase() === "true");
        this.fettered = (sobj.fettered[0].toLowerCase() === "true");
        this.type = sobj.type[0];
        this.file = sobj.file[0];
        this.relative = sobj.relative[0];
        this.notes = sobj.notes[0];
        this.saveMugshots(sobj);
    }
}