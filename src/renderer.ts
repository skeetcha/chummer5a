const TabGroup = require("electron-tabs");

let tabGroup = new TabGroup({
    newTab: {
        title: "New Tab",
        src: "http://google.com",
        visible: true
    }
});

let tab1 = tabGroup.addTab({
    title: "Our Code World",
    src: "https://ourcodeworld.com",
    visible: true
});