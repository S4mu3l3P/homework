describe("Memory", function() {
    
    it("verifies properly library initialization", function () {
        Memory.start(["orange","apple","grape","melon"]);
        expect(Memory._elems[0]).toBe("orange");
        expect(Memory._elems[1]).toBe("apple");
        expect(Memory._elems[2]).toBe("grape");
        expect(Memory._elems[3]).toBe("melon");
    });
    
    it("verifies properly library initialization", function () {
        Memory.start(["orange","apple","grape","melon"]);
        expect(Memory.playit("orange")).toBe(true);
        expect(Memory.playit("apple")).toBe(true);
        expect(Memory.playit("computer")).toBe(null);
        expect(Memory.playit("grape")).toBe(true);
    });
 
});
