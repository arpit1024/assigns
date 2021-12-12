const { expect } = require("@jest/globals");
const {findTime} = require("./time");

describe("Time Testing Programm",()=>{
    test("Convert 5200 millisecond",()=>{
        expect(findTime(5200)).toBe("0 hours 0 minutes 5 seconds");
    });
    test("Convert 60000 millisecond",()=>{
        expect(findTime(60000)).toBe("0 hours 1 minutes 0 seconds");
    });
    test("Convert 180000 millisecond",()=>{
        expect(findTime(180000)).toBe("0 hours 3 minutes 0 seconds");
    });
    test("Convert 200000 millisecond",()=>{
        expect(findTime(200000)).toBe("0 hours 3 minutes 20 seconds");
    });
    test("Convert 72000 millisecond",()=>{
        expect(findTime(72000)).toBe("0 hours 1 minutes 12 seconds");
    });
    test("Convert 6101010 millisecond",()=>{
        expect(findTime(6101010)).toBe("2 hours 42 minutes 41 seconds");
    });
})