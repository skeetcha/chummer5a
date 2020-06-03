import {AttributeType} from "../enums/attrtype";
import type {AttributeJSON} from "../interfaces/attribute";

export class Attribute {
    public constructor() {

    }

    private name: string;
    private min: number;
    private max: number;
    private base: number;
    private points: number;
    private karma: number;
    private type: AttributeType;

    public load(data: Object): void {
        var ndata = data as AttributeJSON;
        this.name = ndata.name;
        this.min = ndata.min;
        this.max = ndata.max;
        this.base = ndata.base;
        this.points = ndata.points;
        this.karma = ndata.karma;

        switch (ndata.type) {
            case "Standard":
                this.type = AttributeType.Standard;
                break;
            case "Special":
                this.type = AttributeType.Special;
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