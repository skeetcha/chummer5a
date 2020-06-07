import * as TabGroup from "electron-tabs";
import * as path from "path";

var tabGroup = new TabGroup({});

[
    {
        title: "Common",
        src: path.join(__dirname, "../../windows/character/tabs/sheet/common/index.html"),
        visible: true
    },
    {
        title: "Skills",
        src: path.join(__dirname, "../../windows/character/tabs/sheet/skills/index.html"),
        visible: true
    },
    {
        title: "Limits",
        src: path.join(__dirname, "../../windows/character/tabs/sheet/limits/index.html"),
        visible: true
    },
    {
        title: "Martial Arts",
        src: path.join(__dirname, "../../windows/character/tabs/sheet/martialArts/index.html"),
        visible: true
    },
    {
        title: "Spells and Spirits",
        src: path.join(__dirname, "../../windows/character/tabs/sheet/spellsSpirits/index.html"),
        visible: true
    },
    {
        title: "Initiation",
        src: path.join(__dirname, "../../windows/character/tabs/sheet/initiation/index.html"),
        visible: true
    },
    {
        title: "Cyberware and Bioware",
        src: path.join(__dirname, "../../windows/character/tabs/sheet/ware/index.html"),
        visible: true
    },
    {
        title: "Street Gear",
        src: path.join(__dirname, "../../windows/character/tabs/sheet/gear/index.html"),
        visible: true
    },
    {
        title: "Vehicles and Drones",
        src: path.join(__dirname, "../../windows/character/tabs/sheet/vehicles/index.html"),
        visible: true
    },
    {
        title: "Character Info",
        src: path.join(__dirname, "../../windows/character/tabs/sheet/info/index.html"),
        visible: true
    },
    {
        title: "Relationships",
        src: path.join(__dirname, "../../windows/character/tabs/sheet/relationships/index.html"),
        visible: true
    }
].forEach((val, i, arr) => {
    tabGroup.addTab(val);
});