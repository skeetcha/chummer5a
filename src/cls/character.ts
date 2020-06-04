import type {CharJson} from "../interfaces/character";
import {Metatype} from "../enums/metatype";
import type {AttributeJSON} from "../interfaces/attribute";
import {Attribute} from "./attribute";
import {Quality} from "./quality";
import type {QualJSON} from "../interfaces/quality";
import {Contact} from "./contact";
import type {ContactJSON} from "../interfaces/contact";

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
    private qualities: Array<Quality>;
    private contacts: Array<Contact>;

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

        ndata.qualities.forEach((val, i, arr) => {
            var newQual = new Quality();
            newQual.load(val);
            this.qualities.push(newQual);
        });

        ndata.contacts.forEach((val, i, arr) => {
            var newContact = new Contact();
            newContact.load(val);
            this.contacts.push(newContact);
        });
    }

    public save(): Object {
        let r: CharJson;

        r.name = this.name;
        r.alias = this.alias;

        switch (this.metatype) {
            case Metatype.Human:
                r.metatype = "Human";
                break;
            case Metatype.Elf:
                r.metatype = "Elf";
                break;
            case Metatype.Dwarf:
                r.metatype = "Dwarf";
                break;
            case Metatype.Ork:
                r.metatype = "Ork";
                break;
            case Metatype.Troll:
                r.metatype = "Troll";
                break;
            default:
                break;
        }

        r.ethnicity = this.ethnicity;
        r.height = this.height;
        r.weight = this.weight;
        r.streetcred = this.streetcred;
        r.notoriety = this.notoriety;
        r.publicAware = this.publicAware;
        r.karma = this.karma;
        r.totalKarma = this.totalKarma;
        r.notes = this.notes;
        r.playerName = this.playerName;

        this.attributes.forEach((val, i, arr) => {
            r.attributes.push(val.save() as AttributeJSON);
        });

        this.qualities.forEach((val, i, arr) => {
            r.qualities.push(val.save() as QualJSON);
        });

        this.contacts.forEach((val, i, arr) => {
            r.contacts.push(val.save() as ContactJSON);
        });

        return r;
    }
}