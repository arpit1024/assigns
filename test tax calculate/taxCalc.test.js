const {taxCalculator}=require("./taxCalculator")

describe("Tax Calcultor Programm",()=>{
    test("Checking for income 270000",()=>{
        expect(taxCalculator(270000)).toBe(13500);
    });
    test("Checking for income 870000",()=>{
        expect(taxCalculator(870000)).toBe(121800);
    });
    test("Checking for income 1111000",()=>{
        expect(taxCalculator(1111000)).toBe(299970);
    });
    test("Checking for income 1232032",()=>{
        expect(taxCalculator(1232032)).toBe(332648.64);
    });
    test("Checking for income 6000000",()=>{
        expect(taxCalculator(6000000)).toBe(1620000);
    });
    test("Checking for income 44561184",()=>{
        expect(taxCalculator(44561184)).toBe(12031519.68);
    });
    test("Checking for income 112561",()=>{
        expect(taxCalculator(112561)).toBe(0);
    });
    test("Checking for income 50000",()=>{
        expect(taxCalculator(50000)).toBe(0);
    });
})