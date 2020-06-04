import type {Sex} from "../enums/sex";
import type {AttributeJSON} from "./attribute";
import type {QualJSON} from "./quality";
import type {ContactJSON} from "./contact";

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
}