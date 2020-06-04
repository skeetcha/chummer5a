import type {QualJSON} from "../interfaces/quality";
import {QualityType} from "../enums/qualtype";

export class Quality {
    public constructor() {

    }

    private name: string;
    private notes: string;
    private type: QualityType;
    private cost: number;

    public load(data: Object): void {
        var ndata = data as QualJSON;
        this.name = ndata.name;
        this.notes = ndata.notes;

        switch (ndata.type) {
            case "Positive":
                this.type = QualityType.Positive;
                break;
            case "Negative":
                this.type = QualityType.Negative;
                break;
            default:
                break;
        }

        this.cost = ndata.cost;
    }

    public save(): Object {
        let r: QualJSON;

        r.name = this.name;
        r.notes = this.notes;

        switch (this.type) {
            case QualityType.Positive:
                r.type = "Positive";
                break;
            case QualityType.Negative:
                r.type = "Negative";
                break;
            default:
                break;
        }

        r.cost = this.cost;
        return r as Object;
    }
}