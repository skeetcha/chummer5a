import type {CharJson} from "../interfaces/character";
import {Metatype} from "../enums/metatype";
import type {AttributeJSON} from "../interfaces/attribute";
import {Attribute} from "./attribute";

export class Character {
    public constructor() {

    }

    private name: string;
    private alias: string;
    private metatype: Metatype;
    private ethnicity: string;
    private height: number;
    private weight: number;
    private streetcred: number;
    private notoriety: number;
    private publicAware: number;
    private karma: number;
    private totalKarma: number;
    private notes: string;
    private playerName: string;
    private attributes: Array<Attribute>;

    public load(data: object): void {
        var ndata = data as CharJson;
        this.name = ndata.name;
        this.alias = ndata.alias;
        
        switch (ndata.metatype) {
            case "Human":
                this.metatype = Metatype.Human;
                break;
            case "Elf":
                this.metatype = Metatype.Elf;
                break;
            case "Dwarf":
                this.metatype = Metatype.Dwarf;
                break;
            case "Ork":
                this.metatype = Metatype.Ork;
                break;
            case "Troll":
                this.metatype = Metatype.Troll;
                break;
            default:
                break;
        }

        this.ethnicity = ndata.ethnicity;
        this.height = ndata.height;
        this.weight = ndata.weight;
        this.streetcred = ndata.streetcred;
        this.notoriety = ndata.notoriety;
        this.publicAware = ndata.publicAware;
        this.karma = ndata.karma;
        this.totalKarma = ndata.totalKarma;
        this.notes = ndata.notes;
        this.playerName = ndata.playerName;

        ndata.attributes.forEach((val, i, arr) => {
            var newAttr = new Attribute();
            newAttr.load(val);
            this.attributes.push(newAttr);
        });
    }

    public save(): Object {
        let r: Object;

        return r;
    }
}