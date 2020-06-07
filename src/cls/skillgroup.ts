import type {SkillGroupJSON} from "../interfaces/skillgroup";
import {Skill} from "./skill";
import type {SkillJSON} from "../interfaces/skill";

export class SkillGroup {
    public constructor() {

    }

    private name: string;
    private points: number;
    private karma: number;
    private skills: Array<Skill>;

    public load(data: Object): void {
        var ndata: SkillGroupJSON = data as SkillGroupJSON;
        this.name = ndata.name;
        this.points = ndata.points;
        this.karma = ndata.karma;

        ndata.skills.forEach((val, i, arr) => {
            var newSkill = new Skill();
            newSkill.load(val);
            this.skills.push(newSkill);
        });
    }

    public save(): SkillGroupJSON {
        let r: SkillGroupJSON;
        r.name = this.name;
        r.points = this.points;
        r.karma = this.karma;

        this.skills.forEach((val, i, arr) => {
            r.skills.push(val.save() as SkillJSON);
        });

        return r;
    }
}