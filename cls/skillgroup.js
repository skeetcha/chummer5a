exports.SkillGroup = class {
    constructor() {

    }

    load(sgobj) {
        this.karma = parseInt(sgobj.karma[0], 10);
        this.base = parseInt(sgobj.base[0], 10);
        this.id = sgobj.id[0];
        this.name = sgobj.name[0];
    }
}