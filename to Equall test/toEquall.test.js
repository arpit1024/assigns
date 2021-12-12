
describe("test Cases for ToEquall", () => {
    test("Checking Object", () => {
        expect({}).toEqual({})
    });
 describe("test Cases for ToEquall", () => {
     test("Checking Array", () => {
         expect([]).toEqual([])
   });
 describe("test Cases for ToEquall", () => {
      test("Checking Object", () => {
         expect({ a: 1, b: 2 }).toEqual({ a: 1, b: 2 })
   });
  describe("test Cases for ToEquall", () => {
      test("Checking Array", () => {
         expect([1, 2, 3]).toEqual([1, 2, 3])
    });
   describe("test Cases for ToEquall", () => {
        test("Checking objects", () => {
         expect({ a: 1, b: { c: 1, d: 2 } }).toEqual({ a: 1, b: { c: 1, d: 2 } })
    });
   describe("test Cases for ToEquall", () => {
         test("Checking Array", () => {
         expect([1, 2, [1, 2]]).toEqual([1, 2, [1, 2]])
    });




 // Failing test cases
  describe("test Cases for ToEquall", () => {
   test("Checking Objects", () => {
      expect({ a: 1, b: { c: 1, d: 2 } }).toEqual({ a: 1, b: { e: 1, d: 2 } })
     });
     describe("test Cases for ToEquall", () => {
        test("Checking Objects", () => {
            expect( [ 1, 2, [ 1, 3] ] ).toEqual( [ 1, 2, [ 1, 2]  ] )
          });
     