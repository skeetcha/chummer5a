import type {SkillJSON} from "./skill";

export interface SkillGroupJSON {
    name: string;
    points: number;
    karma: number;
    skills: Array<SkillJSON>;
}