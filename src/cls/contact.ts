import type {ContactJSON} from "../interfaces/contact";
import {ContactArchetype} from "../enums/carchetype";
import {ContactWork} from "../enums/cwork";

export class Contact {
    public constructor() {

    }

    private name: string;
    private loyalty: number;
    private connection: number;
    private archetype: ContactArchetype;
    private work: ContactWork;

    public load(data: Object): void {
        var ndata = data as ContactJSON;
        this.name = ndata.name;
        this.loyalty = ndata.loyalty;
        this.connection = ndata.connection;

        switch (ndata.archetype) {
            case "Bartender":
                this.archetype = ContactArchetype.Bartender;
                break;
            case "Beat Cop":
                this.archetype = ContactArchetype.BeatCop;
                break;
            case "Fixer":
                this.archetype = ContactArchetype.Fixer;
                break;
            case "Mafia Consiglieri":
                this.archetype = ContactArchetype.MafiaConsiglieri;
                break;
            case "Mechanic":
                this.archetype = ContactArchetype.Mechanic;
                break;
            case "Mr Johnson":
                this.archetype = ContactArchetype.MrJohnson;
                break;
            case "Street Doc":
                this.archetype = ContactArchetype.StreetDoc;
                break;
            case "Talismonger":
                this.archetype = ContactArchetype.Talismonger;
                break;
            default:
                break;
        }

        switch (ndata.work) {
            case "Favor":
                this.work = ContactWork.Favor;
                break;
            case "Legwork":
                this.work = ContactWork.Legwork;
                break;
            case "Networking":
                this.work = ContactWork.Networking;
                break;
            case "Swag":
                this.work = ContactWork.Swag;
                break;
            default:
                break;
        }
    }

    public save(): Object {
        let r: ContactJSON;
        r.name = this.name;
        r.loyalty = this.loyalty;
        r.connection = this.connection;
        
        switch (this.archetype) {
            case ContactArchetype.Bartender:
                r.archetype = "Bartender";
                break;
            case ContactArchetype.BeatCop:
                r.archetype = "Beat Cop";
                break;
            case ContactArchetype.Fixer:
                r.archetype = "Fixer";
                break;
            case ContactArchetype.MafiaConsiglieri:
                r.archetype = "Mafia Consiglieri";
                break;
            case ContactArchetype.Mechanic:
                r.archetype = "Mechanic";
                break;
            case ContactArchetype.MrJohnson:
                r.archetype = "Mr Johnson";
                break;
            case ContactArchetype.StreetDoc:
                r.archetype = "Street Doc";
                break;
            case ContactArchetype.Talismonger:
                r.archetype = "Talismonger";
                break;
            default:
                break;
        }

        switch (this.work) {
            case ContactWork.Favor:
                r.work = "Favor";
                break;
            case ContactWork.Legwork:
                r.work = "Legwork";
                break;
            case ContactWork.Networking:
                r.work = "Networking";
                break;
            case ContactWork.Swag:
                r.work = "Swag";
                break;
            default:
                break;
        }

        return r as Object;
    }
}