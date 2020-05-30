exports.SkillSpecialization = class {
    constructor() {

    }

    load(ssobj) {
        this.guid = ssobj.guid[0];
        this.name = ssobj.name[0];
        this.free = ssobj.free[0];
    }
}