const SkillSpecialization = require("./skillspecialization.js").SkillSpecialization;

exports.KnowledgeSkill = class {
    constructor() {

    }

    load(ksobj, created) {
        this.guid = ksobj.guid[0];
        this.suid = ksobj.suid[0];
        this.isknowledge = (ksobj.isknowledge[0].toLowerCase() === "true");
        this.karma = parseInt(ksobj.karma[0], 10);
        this.base = parseInt(ksobj.base[0], 10);
        this.notes = ksobj.notes[0];

        if (created) {
            this.buywithkarma = (ksobj.buywithkarma[0].toLowerCase() === "true");
        }

        if (ksobj.specs[0].spec) {
            for (var i = 0; i < ksobj.specs[0].spec.length; i++) {
                var newSpec = SkillSpecialization();
                newSpec.load(ksobj.specs[0].spec[i]);
            }
        }

        this.name = ksobj.name[0];
        this.type = ksobj.type[0];

        if (ksobj.forced) {
            this.forced = ksobj.forced[0];
        }
    }
}