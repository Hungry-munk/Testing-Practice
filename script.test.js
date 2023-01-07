import { capitalise, reverseString, calculator } from "./script.js";

// capitalise string tests
describe("capitalise", () => {
    test('takes the "arsam" and capitalises the fist letter returning "Arsam"', () => {
        expect(capitalise("arsam")).toBe("Arsam");
    });
    test('takes the "cHEESE" and capitalises the fist letter returning "CHEESE"', () => {
        expect(capitalise("cHEESE")).toBe("CHEESE");
    });
    test('doesnt allow non string arguemnts such as 1 returning "not a string"', () => {
        expect(capitalise(1)).toBe("not a string");
    });
});

// reverstring tests
describe("reverseString", () => {
    test("takes the string Arsam and reverses it returning masrA", () => {
        expect(reverseString("Arsam")).toBe("masrA");
    });
    test("takes the string Abbaszadeh and reverses it returning hedazsabbA", () => {
        expect(reverseString("Abbaszadeh")).toBe("hedazsabbA");
    });
    test('doesnt allow non string arguemnts such as 1 returning "not a string"', () => {
        expect(reverseString(1)).toBe("not a string");
    });
});

// calculator object
describe("calculator object", () => {
    // add method
    describe("add method", () => {
        test("takes 1 and 2 as args returning 3", () => {
            expect(calculator.add(1, 2)).toBe(3);
        });
        test("takes 4 and 2 as args returning 6", () => {
            expect(calculator.add(4, 2)).toBe(6);
        });
    });
    // subtract method
    describe("subtract method", () => {
        test("takes 8 and 2 as args returning 6", () => {
            expect(calculator.subtract(8, 2)).toBe(6);
        });
        test("takes 2 and 4 as args returning -2", () => {
            expect(calculator.subtract(2, 4)).toBe(-2);
        });
    });
    // divide method
    describe("divide method", () => {
        test("takes 8 and 2 as args returning 4", () => {
            expect(calculator.divide(8, 2)).toBe(4);
        });
        test("takes 2 and 4 as args returning 0.5", () => {
            expect(calculator.divide(2, 4)).toBe(0.5);
        });
    });
    // multiply method
    describe("multiply method", () => {
        test("takes 8 and 2 as args returning 16", () => {
            expect(calculator.multiply(8, 2)).toBe(16);
        });
        test("takes 2 and 4 as args returning 8", () => {
            expect(calculator.multiply(2, 4)).toBe(8);
        });
    });
});