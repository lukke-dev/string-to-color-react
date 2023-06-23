"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateColorFromString = void 0;
function hashCodeFromString(input) {
    let hash = 0;
    if (input.length === 0) {
        return hash;
    }
    for (let counter = 0; counter < input.length; counter++) {
        const char = input.charCodeAt(counter);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
    }
    return Math.abs(hash);
}
function repeat(input, count) {
    for (let i = 0; i < count - 1; i++) {
        input += input;
    }
    return input;
}
function padStart(targetLength, padString, input) {
    targetLength = targetLength >> 0;
    if (input.length > targetLength) {
        return String(input);
    }
    else {
        targetLength = targetLength - input.length;
        if (targetLength > padString.length) {
            padString += repeat(padString, targetLength / padString.length);
        }
        return padString.slice(0, targetLength) + String(input);
    }
}
function randomColorFromString(input, schemaOptions) {
    const hashValue = hashCodeFromString(input);
    if (schemaOptions.length > 0) {
        const colorRange = schemaOptions.length;
        const colorIndex = hashValue % colorRange;
        return schemaOptions[Math.ceil(colorIndex)];
    }
    else {
        let color = '#';
        for (let i = 0; i < 3; i++) {
            const value = (hashValue >> (i * 8)) & 0xff;
            color += padStart(2, '0', value.toString(16));
        }
        return color;
    }
}
function generateColorFromString(input, schemaOptions = []) {
    return randomColorFromString(input, schemaOptions);
}
exports.generateColorFromString = generateColorFromString;
console.log(generateColorFromString('foo', ['red', 'green', 'teal', 'yellow']));
console.log(generateColorFromString('name', ['red', 'green', 'teal', 'yellow']));
