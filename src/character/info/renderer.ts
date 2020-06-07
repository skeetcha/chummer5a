import * as TabGroup from "electron-tabs";
import * as path from "path";

var tabGroup = new TabGroup({});

[
    {
        title: "Karma Summary",
        src: path.join(__dirname, "../../windows/character/tabs/info/karma/index.html"),
        visible: true
    },
    {
        title: "Other Info",
        src: path.join(__dirname, "../../windows/character/tabs/info/other/index.html"),
        visible: true
    },
    {
        title: "Spell Defense",
        src: path.join(__dirname, "../../windows/character/tabs/info/spell/index.html"),
        visible: true
    }
].forEach((val, i, arr) => {
    tabGroup.addTab(val);
});