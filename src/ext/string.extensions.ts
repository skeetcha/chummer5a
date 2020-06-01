interface String {
    toInteger(): number;
    toFloat(): number;
    toBool(): boolean;
}

String.prototype.toInteger = (): number => {
    return parseInt(this.toString(), 10);
};

String.prototype.toFloat = (): number => {
    return parseFloat(this.toString());
}

String.prototype.toBool = (): boolean => {
    return (this.toString().toLowerCase() === "true");
}