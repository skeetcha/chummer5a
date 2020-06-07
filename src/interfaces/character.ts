import type {Sex} from "../enums/sex";
import type {AttributeJSON} from "./attribute";
import type {QualJSON} from "./quality";
import type {ContactJSON} from "./contact";
import type {PriorityJSON} from "./priority";
import type {SkillJSON} from "./skill";
import type {SkillGroupJSON} from "./skillgroup";

export interface CharJson {
    name: string;
    alias: string;
    metatype: string;
    ethnicity: string;
    age: number;
    sex: Sex;
    height: number;
    weight: number;
    streetcred: number;
    notoriety: number;
    publicAware: number;
    karma: number;
    totalKarma: number;
    notes: string;
    playerName: string;
    attributes: Array<AttributeJSON>;
    qualities: Array<QualJSON>;
    contacts: Array<ContactJSON>;
    magType: string;
    created: boolean;
    priorities?: PriorityJSON;
    skills: Array<SkillJSON>;
    skillGroups: Array<SkillGroupJSON>;
}