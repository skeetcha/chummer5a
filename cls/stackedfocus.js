const Gear = require("./gear.js").Gear;

exports.StackedFocus = class {
    constructor() {

    }

    load(sfobj) {
        this.guid = sfobj.guid[0];
        this.gearid = sfobj.gearid[0];
        this.bonded = (sfobj.bonded[0].toLowerCase() === "true");
        this.gears = [];

        if (sfobj.gears[0].gear) {
            for (var i = 0; i < sfobj.gears[0].gear.length; i++) {
                var newGear = Gear();
                newGear.load(sfobj.gears[0].gear[i]);
                this.gears.push(newGear);
            }
        }
    }
}