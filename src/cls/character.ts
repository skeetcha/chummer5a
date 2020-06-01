import type {CharJson} from "../interfaces/character";
import type {Metatype} from "../enums/metatype";

module Classes {
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

        public load(data: object): void {
            var ndata = data as CharJson;
            this.name = ndata.name;
            this.alias = ndata.alias;
            this.metatype = ndata.metatype;
            this.ethnicity = ndata.ethnicity;
            this.height = ndata.height;
            this.weight = ndata.weight;
            this.streetcred = ndata.streetcred;
            this.notoriety = ndata.notoriety;
            this.publicAware = ndata.publicAware;
            this.karma = ndata.karma;
            this.totalKarma = ndata.totalKarma;
            this.notes = ndata.notes;
        }

        public save(): Object {
            let r: Object;

            return r;
        }
    }
}