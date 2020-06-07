import type {CharJson} from "../interfaces/character";
import {Metatype} from "../enums/metatype";
import type {AttributeJSON} from "../interfaces/attribute";
import {Attribute} from "./attribute";
import {Quality} from "./quality";
import type {QualJSON} from "../interfaces/quality";
import {Contact} from "./contact";
import type {ContactJSON} from "../interfaces/contact";
import type {CharCreate} from "../interfaces/charcreate";
import {MagType} from "../enums/magtype";
import {Priority, pfromString} from "../enums/priority";
import {Skill} from "./skill";
import type {SkillJSON} from "../interfaces/skill";
import {SkillGroup} from "./skillgroup";
import type {SkillGroupJSON} from "../interfaces/skillgroup";

export class Character {
    public constructor() {
        this.priorities = new Map<string, Priority>();
        this.attributes = new Array<Attribute>();
        this.qualities = new Array<Quality>();
        this.contacts = new Array<Contact>();
        this.skills = new Array<Skill>();
        this.skillGroups = new Array<SkillGroup>();
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
    private playerName: string;
    private attributes: Array<Attribute>;
    private qualities: Array<Quality>;
    private contacts: Array<Contact>;
    private magType: MagType;
    private priorities: Map<string, Priority>;
    private created: boolean;
    private skills: Array<Skill>;
    private skillGroups: Array<SkillGroup>;

    public create(data: Object): void {
        var ndata = data as CharCreate;

        switch (ndata.metatype) {
            case "h":
                this.metatype = Metatype.Human;
                break;
            case "e":
                this.metatype = Metatype.Elf;
                break;
            case "d":
                this.metatype = Metatype.Dwarf;
                break;
            case "o":
                this.metatype = Metatype.Ork;
                break;
            case "t":
                this.metatype = Metatype.Troll;
                break;
            default:
                break;
        }

        switch (ndata.magTalent) {
            case "m":
                this.magType = MagType.Magician;

                switch (ndata.priorities.magRes) {
                    case "a":
                        ndata.talentChoices.forEach((val, i, arr) => {
                            var skill = new Skill();
                            var skillData: SkillJSON;

                            var ids = ["alchemy", "arcana", "artificing", "assensing", "astralcombat", "banishing", "binding", "counterspelling", "disenchanting", "ritualspellcasting", "spellcasting", "summoning"];
                            var names = ["Alchemy", "Arcana", "Artificing", "Assensing", "Astral Combat", "Banishing", "Binding", "Counterspelling", "Disenchanting", "Ritual Spellcasting", "Spellcasting", "Summoning"];

                            ids.forEach((ival, ii, iarr) => {
                                if (val === ival) {
                                    skillData.name = names[ii];
                                }
                            });

                            skillData.attr = "Magic";
                            skillData.points = 5;
                            skillData.type = "Active";
                            skillData.karma = 0;
                            skill.load(skillData);
                            this.skills.push(skill);
                        });

                        break;
                    case "b":
                        ndata.talentChoices.forEach((val, i, arr) => {
                            var skill = new Skill();
                            var skillData: SkillJSON;

                            var ids = ["alchemy", "arcana", "artificing", "assensing", "astralcombat", "banishing", "binding", "counterspelling", "disenchanting", "ritualspellcasting", "spellcasting", "summoning"];
                            var names = ["Alchemy", "Arcana", "Artificing", "Assensing", "Astral Combat", "Banishing", "Binding", "Counterspelling", "Disenchanting", "Ritual Spellcasting", "Spellcasting", "Summoning"];

                            ids.forEach((ival, ii, iarr) => {
                                if (val === ival) {
                                    skillData.name = names[ii];
                                }
                            });

                            skillData.attr = "Magic";
                            skillData.points = 4;
                            skillData.type = "Active";
                            skillData.karma = 0;
                            skill.load(skillData);
                            this.skills.push(skill);
                        });

                        break;
                    default:
                        break;
                }

                break;
            case "ma":
                this.magType = MagType.MysticAdept;
                
                switch (ndata.priorities.magRes) {
                    case "a":
                        ndata.talentChoices.forEach((val, i, arr) => {
                            var skill = new Skill();
                            var skillData: SkillJSON;

                            var ids = ["alchemy", "arcana", "artificing", "assensing", "astralcombat", "banishing", "binding", "counterspelling", "disenchanting", "ritualspellcasting", "spellcasting", "summoning"];
                            var names = ["Alchemy", "Arcana", "Artificing", "Assensing", "Astral Combat", "Banishing", "Binding", "Counterspelling", "Disenchanting", "Ritual Spellcasting", "Spellcasting", "Summoning"];

                            ids.forEach((ival, ii, iarr) => {
                                if (val === ival) {
                                    skillData.name = names[ii];
                                }
                            });

                            skillData.attr = "Magic";
                            skillData.points = 5;
                            skillData.type = "Active";
                            skillData.karma = 0;
                            skill.load(skillData);
                            this.skills.push(skill);
                        });

                        break;
                    case "b":
                        ndata.talentChoices.forEach((val, i, arr) => {
                            var skill = new Skill();
                            var skillData: SkillJSON;

                            var ids = ["alchemy", "arcana", "artificing", "assensing", "astralcombat", "banishing", "binding", "counterspelling", "disenchanting", "ritualspellcasting", "spellcasting", "summoning"];
                            var names = ["Alchemy", "Arcana", "Artificing", "Assensing", "Astral Combat", "Banishing", "Binding", "Counterspelling", "Disenchanting", "Ritual Spellcasting", "Spellcasting", "Summoning"];

                            ids.forEach((ival, ii, iarr) => {
                                if (val === ival) {
                                    skillData.name = names[ii];
                                }
                            });

                            skillData.attr = "Magic";
                            skillData.points = 4;
                            skillData.type = "Active";
                            skillData.karma = 0;
                            skill.load(skillData);
                            this.skills.push(skill);
                        });

                        break;
                    default:
                        break;
                }

                break;
            case "am":
                this.magType = MagType.AspectedMagician;

                ndata.talentChoices.forEach((val, i, arr) => {
                    switch (val) {
                        case "conjuring":
                            var skillGroup = new SkillGroup();
                            var skillGroupData: SkillGroupJSON;
                            skillGroupData.name = "Conjuring";
                            
                            switch (ndata.priorities.magRes) {
                                case "b":
                                    skillGroupData.points = 4;
                                    break;
                                case "c":
                                    skillGroupData.points = 2;
                                    break;
                                case "d":
                                    skillGroupData.points = 0;
                                    break;
                                default:
                                    break;
                            }

                            skillGroupData.karma = 0;
                            
                            [{name: "Banishing", attr: "Magic"}, {name: "Binding", attr: "Magic"}, {name: "Summoning", attr: "Magic"}].forEach((val, i, arr) => {
                                var skillData: SkillJSON;
                                skillData.name = val.name;
                                skillData.points = skillGroupData.points;
                                skillData.karma = 0;
                                skillData.type = "Active";
                                skillData.attr = val.attr;
                                skillGroupData.skills.push(skillData);
                            });

                            skillGroup.load(skillGroupData);
                            this.skillGroups.push(skillGroup);
                            break;
                        case "enchanting":
                            var skillGroup = new SkillGroup();
                            var skillGroupData: SkillGroupJSON;
                            skillGroupData.name = "Enchanting";
                            
                            switch (ndata.priorities.magRes) {
                                case "b":
                                    skillGroupData.points = 4;
                                    break;
                                case "c":
                                    skillGroupData.points = 2;
                                    break;
                                case "d":
                                    skillGroupData.points = 0;
                                    break;
                                default:
                                    break;
                            }

                            skillGroupData.karma = 0;

                            [{name: "Alchemy", attr: "Magic"}, {name: "Artificing", attr: "Magic"}, {name: "Disenchanting", attr: "Magic"}].forEach((val, i, arr) => {
                                var skillData: SkillJSON;
                                skillData.name = val.name;
                                skillData.points = skillGroupData.points;
                                skillData.karma = 0;
                                skillData.type = "Active";
                                skillData.attr = val.attr;
                                skillGroupData.skills.push(skillData);
                            });

                            skillGroup.load(skillGroupData);
                            this.skillGroups.push(skillGroup);
                            break;
                        case "sorcery":
                            var skillGroup = new SkillGroup();
                            var skillGroupData: SkillGroupJSON;
                            skillGroupData.name = "Sorcery";

                            switch (ndata.priorities.magRes) {
                                case "b":
                                    skillGroupData.points = 4;
                                    break;
                                case "c":
                                    skillGroupData.points = 2;
                                    break;
                                case "d":
                                    skillGroupData.points = 0;
                                    break;
                                default:
                                    break;
                            }

                            skillGroupData.karma = 0;

                            [{name: "Counterspelling", attr: "Magic"}, {name: "Ritual Spellcasting", attr: "Magic"}, {name: "Spellcasting", attr: "Magic"}].forEach((val, i, arr) => {
                                var skillData: SkillJSON;
                                skillData.name = val.name;
                                skillData.points = skillGroupData.points;
                                skillData.karma = 0;
                                skillData.type = "Active";
                                skillData.attr = val.attr;
                                skillGroupData.skills.push(skillData);
                            });

                            skillGroup.load(skillGroupData);
                            this.skillGroups.push(skillGroup);
                            break;
                        default:
                            break;
                    }
                });

                break;

                break;
            case "a":
                this.magType = MagType.Adept;

                switch (ndata.priorities.magRes) {
                    case "b":
                        ndata.talentChoices.forEach((val, i, arr) => {
                            var skill = new Skill();
                            var skillData: SkillJSON;

                            var ids = ["aeronauticsmechanic", "alchemy", "animalhandling", "arcana", "archery", "armorer", "artificing", "artisan", "assensing", "astralcombat", "automatics", "automotivemechanic", "banishing", "binding", "biotechnology", "blades", "chemistry", "clubs", "computer", "con", "counterspelling", "cybercombat", "cybertechnology", "demolitions", "disenchanting", "disguise", "electronicwarfare", "escapeartist", "etiquette", "exoticrangedweapon", "firstaid", "flight", "forgery", "free-fall", "gunnery", "gymnastics", "hacking", "hardware", "heavyweapons", "impersonation", "industrialmechanic", "instruction", "intimidation", "leadership", "locksmith", "longarms", "medicine", "nauticalmechanic", "navigation", "negotation", "palming", "perception", "performance", "pilotaerospace", "pilotaircraft", "pilotexoticvehicle", "pilotgroundcraft", "pilotwalker", "pilotwatercraft", "pistols", "ritualspellcasting", "running", "sneaking", "softare", "spellcasting", "summoning", "survival", "swimming", "throwingweapons", "tracking", "unarmedcombat"];
                            var names = ["Aeronautics Mechanic", "Alchemy", "Animal Handling", "Arcana", "Archery", "Armorer", "Artificing", "Artisan", "Assensing", "Astral Combat", "Automatics", "Automotive Mechanic", "Banishing", "Binding", "Biotechnology", "Blades", "Chemistry", "Clubs", "Computer", "Con", "Counterspelling", "Cybercombat", "Cybertechnology", "Demolitions", "Disenchanting", "Disguise", "Electronic Warfare", "Escape Artist", "Etiquette", "Exotic Ranged Weapon", "First Aid", "Flight", "Forgery", "Free-Fall", "Gunnery", "Gymnastics", "Hacking", "Hardware", "Heavy Weapons", "Impersonation", "Industrial Mechanic", "Instruction", "Intimidation", "Leadership", "Locksmith", "Longarms", "Medicine", "Nautical Mechanic", "Navigation", "Negotation", "Palming", "Perception", "Performance", "Pilot Aerospace", "Pilot Aircraft", "Pilot Exotic Vehicle", "Pilot Ground Craft", "Pilot Walker", "Pilot Watercraft", "Pistols", "Ritual Spellcasting", "Running", "Sneaking", "Softare", "Spellcasting", "Summoning", "Survival", "Swimming", "Throwing Weapons", "Tracking", "Unarmed Combat"];
                            var attrs = ["Logic", "Magic", "Charisma", "Logic", "Agility", "Logic", "Magic", "Intuition", "Intuition", "Willpower", "Agility", "Logic", "Magic", "Magic", "Logic", "Agility", "Logic", "Agility", "Logic", "Charisma", "Magic", "Logic", "Logic", "Logic", "Magic", "Intuition", "Logic", "Agility", "Charisma", "Agility", "Logic", "Agility", "Logic", "Body", "Agility", "Agility", "Logic", "Logic", "Agility", "Charisma", "Logic", "Charisma", "Charisma", "Charisma", "Agility", "Agility", "Logic", "Logic", "Intuition", "Charisma", "Agility", "Intuition", "Charisma", "Reaction", "Reaction", "Reaction", "Reaction", "Reaction", "Reaction", "Agility", "Magic", "Strength", "Agility", "Logic", "Magic", "Magic", "Willpower", "Strength", "Agility", "Intuition", "Agility"];

                            ids.forEach((ival, ii, iarr) => {
                                if (val === ival) {
                                    skillData.name = names[ii];
                                    skillData.attr = attrs[ii];
                                }
                            });

                            skillData.points = 4;
                            skillData.type = "Active";
                            skillData.karma = 0;
                            skill.load(skillData);
                            this.skills.push(skill);
                        });

                        break;
                    case "c":
                        ndata.talentChoices.forEach((val, i, arr) => {
                            var skill = new Skill();
                            var skillData: SkillJSON;

                            var ids = ["aeronauticsmechanic", "alchemy", "animalhandling", "arcana", "archery", "armorer", "artificing", "artisan", "assensing", "astralcombat", "automatics", "automotivemechanic", "banishing", "binding", "biotechnology", "blades", "chemistry", "clubs", "computer", "con", "counterspelling", "cybercombat", "cybertechnology", "demolitions", "disenchanting", "disguise", "electronicwarfare", "escapeartist", "etiquette", "exoticrangedweapon", "firstaid", "flight", "forgery", "free-fall", "gunnery", "gymnastics", "hacking", "hardware", "heavyweapons", "impersonation", "industrialmechanic", "instruction", "intimidation", "leadership", "locksmith", "longarms", "medicine", "nauticalmechanic", "navigation", "negotation", "palming", "perception", "performance", "pilotaerospace", "pilotaircraft", "pilotexoticvehicle", "pilotgroundcraft", "pilotwalker", "pilotwatercraft", "pistols", "ritualspellcasting", "running", "sneaking", "softare", "spellcasting", "summoning", "survival", "swimming", "throwingweapons", "tracking", "unarmedcombat"];
                            var names = ["Aeronautics Mechanic", "Alchemy", "Animal Handling", "Arcana", "Archery", "Armorer", "Artificing", "Artisan", "Assensing", "Astral Combat", "Automatics", "Automotive Mechanic", "Banishing", "Binding", "Biotechnology", "Blades", "Chemistry", "Clubs", "Computer", "Con", "Counterspelling", "Cybercombat", "Cybertechnology", "Demolitions", "Disenchanting", "Disguise", "Electronic Warfare", "Escape Artist", "Etiquette", "Exotic Ranged Weapon", "First Aid", "Flight", "Forgery", "Free-Fall", "Gunnery", "Gymnastics", "Hacking", "Hardware", "Heavy Weapons", "Impersonation", "Industrial Mechanic", "Instruction", "Intimidation", "Leadership", "Locksmith", "Longarms", "Medicine", "Nautical Mechanic", "Navigation", "Negotation", "Palming", "Perception", "Performance", "Pilot Aerospace", "Pilot Aircraft", "Pilot Exotic Vehicle", "Pilot Ground Craft", "Pilot Walker", "Pilot Watercraft", "Pistols", "Ritual Spellcasting", "Running", "Sneaking", "Softare", "Spellcasting", "Summoning", "Survival", "Swimming", "Throwing Weapons", "Tracking", "Unarmed Combat"];
                            var attrs = ["Logic", "Magic", "Charisma", "Logic", "Agility", "Logic", "Magic", "Intuition", "Intuition", "Willpower", "Agility", "Logic", "Magic", "Magic", "Logic", "Agility", "Logic", "Agility", "Logic", "Charisma", "Magic", "Logic", "Logic", "Logic", "Magic", "Intuition", "Logic", "Agility", "Charisma", "Agility", "Logic", "Agility", "Logic", "Body", "Agility", "Agility", "Logic", "Logic", "Agility", "Charisma", "Logic", "Charisma", "Charisma", "Charisma", "Agility", "Agility", "Logic", "Logic", "Intuition", "Charisma", "Agility", "Intuition", "Charisma", "Reaction", "Reaction", "Reaction", "Reaction", "Reaction", "Reaction", "Agility", "Magic", "Strength", "Agility", "Logic", "Magic", "Magic", "Willpower", "Strength", "Agility", "Intuition", "Agility"];

                            ids.forEach((ival, ii, iarr) => {
                                if (val === ival) {
                                    skillData.name = names[ii];
                                    skillData.attr = attrs[ii];
                                }
                            });

                            skillData.points = 2;
                            skillData.type = "Active";
                            skillData.karma = 0;
                            skill.load(skillData);
                            this.skills.push(skill);
                        });

                        break;
                    default:
                        break;
                }

                break;
            case "t":
                this.magType = MagType.Technomancer;

                switch (ndata.priorities.magRes) {
                    case "a":
                        ndata.talentChoices.forEach((val, i, arr) => {
                            var skill = new Skill();
                            var skillData: SkillJSON;

                            var ids = ["compiling", "computer", "cybercombat", "decompiling", "electronicwarfare", "hacking", "hardware", "registering", "software"];
                            var names = ["Compiling", "Computer", "Cybercombat", "Decompiling", "Electronic Warfare", "Hacking", "Hardware", "Registering", "Software"];

                            ids.forEach((ival, ii, iarr) => {
                                if (val === ival) {
                                    skillData.name = names[ii];
                                }
                            });

                            skillData.attr = "Resonance";
                            skillData.points = 5;
                            skillData.type = "Active";
                            skillData.karma = 0;
                            skill.load(skillData);
                            this.skills.push(skill);
                        });

                        break;
                    case "b":
                        ndata.talentChoices.forEach((val, i, arr) => {
                            var skill = new Skill();
                            var skillData: SkillJSON;

                            var ids = ["compiling", "computer", "cybercombat", "decompiling", "electronicwarfare", "hacking", "hardware", "registering", "software"];
                            var names = ["Compiling", "Computer", "Cybercombat", "Decompiling", "Electronic Warfare", "Hacking", "Hardware", "Registering", "Software"];

                            ids.forEach((ival, ii, iarr) => {
                                if (val === ival) {
                                    skillData.name = names[ii];
                                }
                            });

                            skillData.attr = "Resonance";
                            skillData.points = 4;
                            skillData.type = "Active";
                            skillData.karma = 0;
                            skill.load(skillData);
                            this.skills.push(skill);
                        });

                        break;
                    case "c":
                        ndata.talentChoices.forEach((val, i, arr) => {
                            var skill = new Skill();
                            var skillData: SkillJSON;

                            var ids = ["compiling", "computer", "cybercombat", "decompiling", "electronicwarfare", "hacking", "hardware", "registering", "software"];
                            var names = ["Compiling", "Computer", "Cybercombat", "Decompiling", "Electronic Warfare", "Hacking", "Hardware", "Registering", "Software"];

                            ids.forEach((ival, ii, iarr) => {
                                if (val === ival) {
                                    skillData.name = names[ii];
                                }
                            });

                            skillData.attr = "Resonance";
                            skillData.points = 2;
                            skillData.type = "Active";
                            skillData.karma = 0;
                            skill.load(skillData);
                            this.skills.push(skill);
                        });
                    default:
                        break;
                }

                break;
            default:
                this.magType = MagType.Mundane;
                break;
        }

        this.created = false;
        this.priorities.set("metatype", pfromString(ndata.priorities.metatype));
        this.priorities.set("attributes", pfromString(ndata.priorities.attributes));
        this.priorities.set("magRes", pfromString(ndata.priorities.magRes));
        this.priorities.set("skills", pfromString(ndata.priorities.skills));
        this.priorities.set("resources", pfromString(ndata.priorities.resources));
    }

    public load(data: object): void {
        var ndata = data as CharJson;
        this.name = ndata.name;
        this.alias = ndata.alias;
        
        switch (ndata.metatype) {
            case "Human":
                this.metatype = Metatype.Human;
                break;
            case "Elf":
                this.metatype = Metatype.Elf;
                break;
            case "Dwarf":
                this.metatype = Metatype.Dwarf;
                break;
            case "Ork":
                this.metatype = Metatype.Ork;
                break;
            case "Troll":
                this.metatype = Metatype.Troll;
                break;
            default:
                break;
        }

        this.ethnicity = ndata.ethnicity;
        this.height = ndata.height;
        this.weight = ndata.weight;
        this.streetcred = ndata.streetcred;
        this.notoriety = ndata.notoriety;
        this.publicAware = ndata.publicAware;
        this.karma = ndata.karma;
        this.totalKarma = ndata.totalKarma;
        this.notes = ndata.notes;
        this.playerName = ndata.playerName;

        ndata.attributes.forEach((val, i, arr) => {
            var newAttr = new Attribute();
            newAttr.load(val);
            this.attributes.push(newAttr);
        });

        ndata.qualities.forEach((val, i, arr) => {
            var newQual = new Quality();
            newQual.load(val);
            this.qualities.push(newQual);
        });

        ndata.contacts.forEach((val, i, arr) => {
            var newContact = new Contact();
            newContact.load(val);
            this.contacts.push(newContact);
        });

        switch (ndata.magType) {
            case "Adept":
                this.magType = MagType.Adept;
                break;
            case "AspectedMagician":
                this.magType = MagType.AspectedMagician;
                break;
            case "Magician":
                this.magType = MagType.Magician;
                break;
            case "MysticAdept":
                this.magType = MagType.MysticAdept;
                break;
            case "Technomancer":
                this.magType = MagType.Technomancer;
                break;
            default:
                this.magType = MagType.Mundane;
                break;
        }

        this.created = ndata.created;

        if (ndata.priorities !== undefined) {
            this.priorities.set("metatype", pfromString(ndata.priorities.metatype));
            this.priorities.set("attributes", pfromString(ndata.priorities.attributes));
            this.priorities.set("magRes", pfromString(ndata.priorities.magRes));
            this.priorities.set("skills", pfromString(ndata.priorities.skills));
            this.priorities.set("resources", pfromString(ndata.priorities.resources));
        }

        ndata.skills.forEach((val, i, arr) => {
            var newSkill = new Skill();
            newSkill.load(val);
            this.skills.push(newSkill);
        });

        ndata.skillGroups.forEach((val, i, arr) => {
            var newSG = new SkillGroup();
            newSG.load(val);
            this.skillGroups.push(newSG);
        });
    }

    public save(): Object {
        let r: CharJson;

        r.name = this.name;
        r.alias = this.alias;

        switch (this.metatype) {
            case Metatype.Human:
                r.metatype = "Human";
                break;
            case Metatype.Elf:
                r.metatype = "Elf";
                break;
            case Metatype.Dwarf:
                r.metatype = "Dwarf";
                break;
            case Metatype.Ork:
                r.metatype = "Ork";
                break;
            case Metatype.Troll:
                r.metatype = "Troll";
                break;
            default:
                break;
        }

        r.ethnicity = this.ethnicity;
        r.height = this.height;
        r.weight = this.weight;
        r.streetcred = this.streetcred;
        r.notoriety = this.notoriety;
        r.publicAware = this.publicAware;
        r.karma = this.karma;
        r.totalKarma = this.totalKarma;
        r.notes = this.notes;
        r.playerName = this.playerName;

        this.attributes.forEach((val, i, arr) => {
            r.attributes.push(val.save() as AttributeJSON);
        });

        this.qualities.forEach((val, i, arr) => {
            r.qualities.push(val.save() as QualJSON);
        });

        this.contacts.forEach((val, i, arr) => {
            r.contacts.push(val.save() as ContactJSON);
        });

        switch (this.magType) {
            case MagType.Adept:
                r.magType = "Adept";
                break;
            case MagType.AspectedMagician:
                r.magType = "AspectedMagician";
                break;
            case MagType.Magician:
                r.magType = "Magician";
                break;
            case MagType.Mundane:
                r.magType = "Mundane";
                break;
            case MagType.MysticAdept:
                r.magType = "MysticAdept";
                break;
            case MagType.Technomancer:
                r.magType = "Technomancer";
                break;
            default:
                break;
        }

        r.created = this.created;

        if (!this.created) {
            r.priorities.metatype = Priority[this.priorities.get("metatype")];
            r.priorities.attributes = Priority[this.priorities.get("attributes")];
            r.priorities.magRes = Priority[this.priorities.get("magRes")];
            r.priorities.skills = Priority[this.priorities.get("skills")];
            r.priorities.resources = Priority[this.priorities.get("resources")];
        }
        
        this.skills.forEach((val, i, arr) => {
            r.skills.push(val.save() as SkillJSON);
        });

        this.skillGroups.forEach((val, i, arr) => {
            r.skillGroups.push(val.save() as SkillGroupJSON);
        });

        return r;
    }

    public getName(): string {
        return this.name;
    }

    public isCreated(): boolean {
        return this.created;
    }
}