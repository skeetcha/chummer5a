const Skill = require("./skill.js").Skill;
const KnowledgeSkill = require("./knowledgeskill.js").KnowledgeSkill;
const SkillGroup = require("./skillgroup.js").SkillGroup;

exports.SkillSection = class {
    constructor() {

    }

    load(ssobj, created) {
        this.skillptsmax = parseInt(ssobj.skillptsmax[0], 10);
        this.skillgrpsmax = parseInt(ssobj.skillgrpsmax[0], 10);
        this.skills = [];

        for (var i = 0; i < ssobj.skills[0].skill.length; i++) {
            var newSkill = Skill();
            newSkill.load(ssobj.skills[0].skill[i], created);
            this.skills.push(newSkill);
        }

        this.knoskills = [];

        for (var i = 0; i < ssobj.knoskills[0].skill.length; i++) {
            var newKnoSkill = KnowledgeSkill();
            newKnoSkill.load(ssobj.knoskills[0].skill[i], created);
        }

        this.groups = [];

        for (var i = 0; i < ssobj.groups[0].group.length; i++) {
            var newGroup = SkillGroup();
            newGroup.load(ssobj.groups[0].group[i]);
            this.groups.push(newGroup);
        }
    }
}