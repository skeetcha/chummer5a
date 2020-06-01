import type {Metatype} from "../enums/metatype";
import type {Sex} from "../enums/sex";

export interface CharJson {
    name: string;
    alias: string;
    metatype: Metatype;
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
}