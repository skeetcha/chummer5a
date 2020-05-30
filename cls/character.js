const Tradition = require("./tradition.js").Tradition;
const SkillSection = require("./skillsection.js").SkillSection;
const Contact = require("./contact.js").Contact;
const Spell = require("./spell.js").Spell;
const Focus = require("./focus.js").Focus;
const StackedFocus = require("./stackedfocus.js").StackedFocus;
const Power = require("./power.js").Power;
const Spirit = require("./spirit.js").Spirit;
const ComplexForm = require("./complexform.js").ComplexForm;

exports.Character = class {
    constructor() {

    }

    load(cobj) {
        if (cobj.gameedition[0] !== "SR5") {
            console.log("Incorrect game edition.");
            return;
        }

        this.settingsFile = cobj.settingsFile[0];
        this.metatype = cobj.metatype[0];
        this.metatypeid = cobj.metatypeid[0];
        this.metatypebp = parseInt(cobj.metatypebp[0], 10);
        this.metavariant =  cobj.metavariant[0];
        this.metavariantid =  cobj.metavariantid[0];
        this.metatypecategory =  cobj.metatypecategory[0];
        this.movement =  cobj.movement[0];
        this.walk =  cobj.walk[0];
        this.run =  cobj.run[0];
        this.sprint =  cobj.sprint[0];
        this.walkalt =  cobj.walkalt[0];
        this.runalt =  cobj.runalt[0];
        this.sprintalt =  cobj.sprintalt[0];
        this.initiativedice =  parseInt(cobj.initiativedice[0], 10);
        this.prioritymetatype =  cobj.prioritymetatype[0];
        this.priorityattributes =  cobj.priorityattributes[0];
        this.priorityspecial =  cobj.priorityspecial[0];
        this.priorityskills =  cobj.priorityskills[0];
        this.priorityresources =  cobj.priorityresources[0];
        this.prioritytalent =  cobj.prioritytalent[0];
        this.priorityskills =  cobj.priorityskills[1];
        this.essenceatspecialstart =  parseFloat(cobj.essenceatspecialstart[0]);
        this.name =  cobj.name[0];
        this.mainmugshotindex =  cobj.mainmugshotindex[0];
        this.mugshots =  cobj.mugshots[0];
        this.sex =  cobj.sex[0];
        this.age =  cobj.age[0];
        this.eyes =  cobj.eyes[0];
        this.height =  cobj.height[0];
        this.weight =  cobj.weight[0];
        this.skin =  cobj.skin[0];
        this.hair =  cobj.hair[0];
        this.description =  cobj.description[0];
        this.background =  cobj.background[0];
        this.concept =  cobj.concept[0];
        this.notes =  cobj.notes[0];
        this.alias =  cobj.alias[0];
        this.playername =  cobj.playername[0];
        this.gamenotes =  cobj.gamenotes[0];
        this.primaryarm =  cobj.primaryarm[0];
        this.karma =  cobj.karma[0];
        this.special =  cobj.special[0];
        this.totalspecial =  cobj.special[0];
        this.totalattributes =  cobj.totalattributes[0];
        this.contactpoints =  cobj.contactpoints[0];
        this.contactpointsused =  cobj.contactpointsused[0];
        this.spellimit =  cobj.spelllimit[0];
        this.cfplimit =  cobj.cfplimit[0];
        this.ainormalprogramlimit =  cobj.ainormalprogramlimit[0];
        this.aiadvancedprogramlimit =  cobj.aiadvancedprogramlimit[0];
        this.currentcounterspellingdice =  cobj.currentcounterspellingdice[0];
        this.streetcred =  cobj.streetcred[0];
        this.notoriety =  cobj.notoriety[0];
        this.publicawareness =  cobj.publicawareness[0];
        this.burntstreetcred =  cobj.burntstreetcred[0];
        this.created =  (cobj.created[0].toLowerCase() === "true");
        this.maxavail =  parseInt(cobj.maxavail[0], 10);
        this.nuyen =  parseFloat(cobj.nuyen[0]);
        this.startingnuyen =  parseFloat(cobj.startingnuyen[0]);
        this.sumtoten =  parseInt(cobj.sumtoten[0], 10);
        this.buildkarma =  parseInt(cobj.buildkarma[0], 10);
        this.buildmethod =  cobj.buildmethod[0];
        this.gameplayoption =  cobj.gameplayoption[0];
        this.gameplayoptionqualitylimit =  parseInt(cobj.gameplayoptionqualitylimit[0], 10);
        this.maxnuyen =  parseFloat(cobj.maxnuyen[0]);
        this.maxkarma =  parseInt(cobj.maxkarma[0], 10);
        this.contactmultiplier =  parseInt(cobj.contactmultiplier[0], 10);
        this.bannedwaregrades =  [];
        this.nuyenbp =  parseFloat(cobj.nuyenbp[0]);
        this.nuyenmaxbp =  parseFloat(cobj.nuyenmaxbp[0]);
        this.adept =  (cobj.adept[0].toLowerCase() === "true");
        this.magician =  (cobj.magician[0].toLowerCase() === "true");
        this.technomancer =  (cobj.technomancer[0].toLowerCase() === "true");
        this.ai =  (cobj.ai[0].toLowerCase() === "true");
        this.cyberwaredisabled =  (cobj.cyberwaredisabled[0].toLowerCase() === "true");
        this.initiationdisabled =  (cobj.initiationdisabled[0].toLowerCase() === "true");
        this.critter =  (cobj.critter[0].toLowerCase() === "true");
        this.prototypetranshuman =  parseFloat(cobj.prototypetranshuman[0]);
        this.attributes =  [];
        this.magenabled =  (cobj.magenabled[0].toLowerCase() === "true");
        this.initiategrade =  parseInt(cobj.initiategrade[0], 10);
        this.resenabled =  (cobj.resenabled[0].toLowerCase() === "true");
        this.submersiongrade =  parseInt(cobj.submersiongrade[0], 10);
        this.depenabled =  (cobj.depenabled[0].toLowerCase() === "true");
        this.groupmember =  (cobj.groupmember[0].toLowerCase() === "true");
        this.groupname =  cobj.groupname[0];
        this.groupnotes =  cobj.groupnotes[0];
        this.totaless =  parseFloat(cobj.totaless[0]);
        this.tradition = Tradition();
        this.tradition.load(cobj.tradition[0]);
        this.physicalcmfilled = parseInt(cobj.physicalcmfilled[0], 10);
        this.stuncmfilled = parseInt(cobj.stuncmfilled[0], 10);
        this.newskills = SkillSection();
        this.newskills.load(cobj.newskills[0]);
        this.contacts = [];

        if (cobj.contacts[0].contact) {
            for (var i = 0; i < cobj.contacts[0].contact.length; i++) {
                var newContact = Contact();
                newContact.load(cobj.contacts[0].contact[i]);
                this.contacts.push(newContact);
            }
        }

        this.spells = [];

        if (cobj.spells[0].spell) {
            for (var i = 0; i < cobj.spells[0].spell.length; i++) {
                var newSpell = Spell();
                newSpell.load(cobj.spells[0].spell[i]);
                this.spells.push(newSpell);
            }
        }

        this.foci = [];

        if (cobj.foci[0].focus) {
            for (var i = 0; i < cobj.foci[0].focus.length; i++) {
                var newFocus = Focus();
                newFocus.load(cobj.foci[0].focus[i]);
                this.foci.push(newFocus);
            }
        }

        this.stackedfoci = [];

        if (cobj.stackedfoci[0].stackedfocus) {
            for (var i = 0; i < cobj.stackedfoci[0].stackedfocus.length; i++) {
                var newStackedFocus = StackedFocus();
                newStackedFocus.load(cobj.stackedfoci[0].stackedfocus[i]);
                this.stackedfoci.push(newStackedFocus);
            }
        }

        this.powers = [];

        if (cobj.powers[0].power) {
            for (var i = 0; i < cobj.powers[0].power.length; i++) {
                var newPower = Power();
                newPower.load(cobj.powers[0].power[i]);
                this.powers.push(newPower);
            }
        }

        this.spirits = [];

        if (cobj.spirits[0].spirit) {
            for (var i = 0; i < cobj.spirits[0].spirit.length; i++) {
                var newSpirit = Spirit();
                newSpirit.load(cobj.spirits[0].spirit[i]);
                this.spirits.push(newSpirit);
            }
        }

        this.complexforms = [];

        if (cobj.complexforms[0].complexform) {
            for (var i = 0; i < cobj.complexforms[0].complexform.length; i++) {
                var newCF = ComplexForm();
                newCF.load(cobj.complexforms[0].complexform[i]);
                this.complexforms.push(newCF);
            }
        }
    }
}