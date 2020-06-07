export enum Priority {
    A,
    B,
    C,
    D,
    E
}

export function pfromString(p: string): Priority {
    switch (p.toLowerCase()) {
        case "a":
            return Priority.A;
        case "b":
            return Priority.B;
        case "c":
            return Priority.C;
        case "d":
            return Priority.D;
        case "e":
            return Priority.E;
        default:
            throw "Not a correct priority";
    }
}