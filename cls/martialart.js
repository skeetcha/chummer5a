const MartialArtTechnique = require("./matechnique.js").MartialArtTechnique;

exports.MartialArt = class {
    constructor() {

    }

    load(maobj) {
        this.name = maobj.name[0];
        this.sourceid = maobj.sourceid[0];
        this.guid = maobj.guid[0];
        this.source = maobj.source[0];
        this.page = maobj.page[0];
        this.rating = parseInt(maobj.rating[0], 10);
        this.cost = parseInt(maobj.cost[0], 10);
        this.isquality = (maobj.isquality[0].toLowerCase() === "true");
        this.martialarttechniques = [];

        if (maobj.martialarttechniques[0].martialarttechnique) {
            for (var i = 0; i < maobj.martialarttechniques[0].martialarttechnique.length; i++) {
                var newMATechnique = MartialArtTechnique();
                newMATechnique.load(maobj.martialarttechniques[0].martialarttechnique[i]);
                this.martialarttechniques.push(newMATechnique);
            }
        }

        this.notes = maobj.notes[0];
    }
}