describe("Calor", function () {

    it("Correct city report", function () {
        expect(Calor.selectCity("trento")).toBe(true);
        expect(Calor.selectCity("123B")).toBe(false);
    });

    it("Correct MIN temperature", function () {
        expect(Calor.getMin("Wednesday")).toBe(29);
        expect(Calor.getMin("1Wednesday")).toBe(null);
    });

    it("Correct MAX temperature", function () {
        expect(Calor.getMax("Wednesday")).toBe(34);
        expect(Calor.getMax("1Wednesday")).toBe(null);
    });


});
