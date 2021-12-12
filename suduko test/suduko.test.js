const {suduko} = require("./suduko");

describe("Suduko Testing Programm",()=>{
    test("check testBoard 1",()=>{
        expect(suduko(`0 4 0 0 0 0 1 7 9 
        0 0 2 0 0 8 0 5 4 
        0 0 6 0 0 5 0 0 8 
        0 8 0 0 7 0 9 1 0 
        0 5 0 0 9 0 0 3 0 
        0 1 9 0 6 0 0 4 0 
        3 0 0 4 0 0 7 0 0 
        5 7 0 1 0 0 2 0 0 
        9 2 8 0 0 0 0 6 0`)).toBe("Possible");
    });
    test("check testBoard 2",()=>{
        expect(suduko(`0 4 0 0 0 0 3 7 9 
        0 0 0 0 0 8 0 5 4 
        0 3 0 0 0 5 0 0 8 
        0 8 0 0 7 0 9 1 0 
        0 5 0 0 9 0 0 3 0 
        0 0 9 0 6 0 0 4 0 
        3 0 0 4 0 0 7 0 0 
        5 7 0 1 0 0 2 0 0 
        9 2 8 0 0 0 0 6 1`)).toBe("Possible");
    });
    test("check testBoard 3",()=>{
        expect(suduko(`1 4 0 0 0 0 1 7 9 
        0 0 2 0 0 8 0 5 4 
        0 0 6 0 0 5 0 0 8 
        0 8 0 0 7 0 9 1 0 
        0 5 0 0 9 0 0 3 0 
        0 1 9 0 6 0 0 4 0 
        3 0 0 4 0 0 7 0 0 
        5 7 0 1 0 0 2 0 0 
        9 2 8 0 0 0 0 6 1`)).toBe("Not Possible");
    });
    test("check testBoard 4",()=>{
        expect(suduko(`0 2 0 1 0 0 1 7 9 
        1 0 2 0 0 8 0 5 4 
        0 0 6 0 0 5 0 0 8 
        0 8 0 0 7 0 9 1 0 
        0 5 0 0 9 0 0 3 0 
        0 1 9 0 6 0 0 4 0 
        3 0 0 4 0 0 7 0 0 
        5 7 0 1 0 0 2 0 0 
        9 2 8 0 0 0 0 6 1`)).toBe("Not Possible");
    });
})