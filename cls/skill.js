const SkillSpecialization = require("./skillspecialization.js").SkillSpecialization;

exports.Skill = class {
    constructor() {

    }

    load(sobj, created) {
        this.guid = sobj.guid[0];
        this.suid = sobj.suid[0];
        this.isknowledge = (sobj.isknowledge[0].toLowerCase() === "true");
        this.skillcategory = sobj.skillcategory[0];
        this.karma = parseInt(sobj.karma[0], 10);
        this.base = parseInt(sobj.base[0], 10);
        this.notes = sobj.notes[0];
        this.name = sobj.name[0];

        if (created) {
            this.buywithkarma = (sobj.buywithkarma[0].toLowerCase() === "true");
        }

        if (sobj.specs[0].spec) {
            this.specs = [];

            for (var i = 0; i < sobj.specs[0].spec.length; i++) {
                var newSpec = SkillSpecialization();
                newSpec.load(sobj.specs[0].spec[i]);
                this.specs.push(newSpec);
            }
        }
    }
}