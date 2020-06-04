import {SkillType} from "../enums/skilltype";
import type {SkillJSON} from "../interfaces/skill";

export class Skill {
    public constructor() {

    }

    private type: SkillType;
    private name: string;
    private attr: string;
    private points: number;
    private karma: number;

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

        this.name = ndata.name;
        this.attr = ndata.attr;
        this.points = ndata.points;
        this.karma = ndata.karma;
    }

    public save(): Object {
        let r: SkillJSON;

        switch (this.type) {
            case SkillType.Active:
                r.type = "Active";
                break;
            case SkillType.Knowledge:
                r.type = "Knowledge";
                break;
            case SkillType.Language:
                r.type = "Language";
                break;
            default:
                break;
        }
        
        r.name = this.name;
        r.attr = this.attr;
        r.points = this.points;
        r.karma = this.karma;

        return r as Object;
    }
}