describe("Drink", function () {

    it("verifies properly library initialization", function () {
        Drink.init();
        expect(Drink.getTotal()).toBe(0);
        Drink.glup(1);
        Drink.init();
        expect(Drink.getTotal()).toBe(0);
    });

    it("verifies properly gulp", function () {
        Drink.init();
        expect(Drink.glup(1)).toBe(120);
        expect(Drink.glup(2)).toBe(25);
        expect(Drink.glup(4)).toBe(null);
        expect(Drink.glup('a')).toBe(null);
    });

    it("verifies properly person status", function () {
        Drink.init();
        Drink.glup(1);
        Drink.glup(2);
        expect(Drink.getStatus()).toBe('sober');
        Drink.init();
        for (var i = 0; i < 12; i++) {
            Drink.glup(2);
        }
        expect(Drink.getStatus()).toBe('drunk');
        for (var i = 0; i < 8; i++) {
            Drink.glup(2);
        }
        expect(Drink.getStatus()).toBe('danger');
    });

    it("verifies properly total alchool", function () {
        Drink.init();
        expect(Drink.getTotal()).toBe(0);
        Drink.glup(1);
        Drink.glup(2);
        Drink.glup('b');
        expect(Drink.getTotal()).toBe(145);
        Drink.init();
        for (var i = 0; i < 12; i++) {
            Drink.glup(2);
        }
        expect(Drink.getTotal()).toBe(300);
        for (var i = 0; i < 8; i++) {
            Drink.glup(2);
        }
        expect(Drink.getTotal()).toBe(500);
    });


});
