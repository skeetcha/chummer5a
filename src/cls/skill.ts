import {SkillType} from "../enums/skilltype";
import type {SkillJSON} from "../interfaces/skill";

export class Skill {
    public constructor() {

    }

    private type: SkillType;

    public load(data: Object): void {
        var ndata = data as SkillJSON;

        switch (ndata.type) {
            case "Active":
                this.type = SkillType.Active;
                break;
            case "Knowledge":
                this.type = SkillType.Knowledge;
                break;
            case "Language":
                this.type = SkillType.Language;
                break;
            default:
                break;
        }
    }

    public save(): Object {
        let r: Object;

        return r;
    }
}