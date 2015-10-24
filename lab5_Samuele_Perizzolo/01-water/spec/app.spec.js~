describe("Water", function() {
    
  it("Correct vapor status", function() { 
      expect(Water.getStatus(101)).toBe("vapor");
  }); 
    
  it("Correct liquid status", function() { 
      expect(Water.getStatus(0)).toBe("liquid");
      expect(Water.getStatus(99)).toBe("liquid");
  }); 
    
  it("Correct ice status", function() { 
      expect(Water.getStatus(-1)).toBe("ice");
      expect(Water.getStatus(-273)).toBe("ice");
  }); 
    
  it("Checking other inputs", function() { 
      expect(Water.getStatus(-274)).toBe(null);
  }); 
 
});
