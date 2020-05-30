exports.Contact = class {
    constructor() {

    }

    saveMugshots(cobj) {
        this.mainmugshotindex = cobj.mainmugshotindex[0];
        this.mugshots = [];

        if (cobj.mugshots[0].mugshot) {
            for (var i = 0; i < cobj.mugshots[0].mugshot.length; i++) {
                this.mugshots.push(cobj.mugshots[0].mugshot[i]);
            }
        }
    }

    load(cobj) {
        this.name = cobj.name[0];
        this.role = cobj.role[0];
        this.location = cobj.location[0];
        this.connection = parseInt(cobj.connection[0], 10);
        this.loyalty = parseInt(cobj.loyalty[0], 10);
        this.metatype = cobj.metatype[0];
        this.sex = cobj.sex[0];
        this.age = cobj.age[0];
        this.contacttype = cobj.contacttype[0];
        this.preferredpayment = cobj.preferredpayment[0];
        this.hobbiesvice = cobj.hobbiesvice[0];
        this.personallife = cobj.personallife[0];
        this.type = cobj.type[0];
        this.file = cobj.file[0];
        this.relative = cobj.relative[0];
        this.notes = cobj.notes[0];
        this.groupname = cobj.groupname[0];
        this.color = cobj.colour[0];
        this.group = (cobj.group[0].toLowerCase() === "true");
        this.family = (cobj.family[0].toLowerCase() === "true");
        this.blackmail = (cobj.blackmail[0].toLowerCase() === "true");
        this.free = (cobj.free[0].toLowerCase() === "true");
        this.groupenabled = (cobj.groupenabled[0].toLowerCase() === "true");

        if (cobj.readonly) {
            this.readonly = cobj.readonly[0];
        }

        if (cobj.guid) {
            this.guid = cobj.guid[0];
        }

        this.saveMugshots(cobj);
    }
}