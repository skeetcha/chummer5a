export interface PriorityData {
    metatype: string;
    attributes: string;
    magRes: string;
    skills: string;
    resources: string;
}

export interface CharCreate {
    priorities: PriorityData;
    magTalent: string;
    talentChoices: Array<string>;
    metatype: string;
}