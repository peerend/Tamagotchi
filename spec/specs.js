describe("Mogwai", function() {
  describe("initialize", function() {
    it("sets the creature type and a few other properties", function() {
      var myMogwai = Object.create(Mogwai);
      myMogwai.initialize("Mogli", 10, 10, 10);
      myMogwai.creature.should.equal("Mogli");
      myMogwai.foodLevel.should.equal(10);
      myMogwai.playLevel.should.equal(10);
      myMogwai.dirtyLevel.should.equal(10);
    });
  });
  describe("playLevel", function() {
    it("Mogwai exposed to sunlight. Nearly or dead if under 0 life points.", function() {
      var myMogwai = Object.create(Mogwai);
      myMogwai.initialize("Mogli",10,10,10);
      myMogwai.playLevels();
      myMogwai.playLevel.should.equal(1);
    });
  });
  describe("foodLevel", function() {
    it("Mogwai eats after midnight and turns into Gremlin!!!", function() {
      var myMogwai = Object.create(Mogwai);
      myMogwai.initialize("Mogli",10,10,10);
      myMogwai.foodLevels();
      myMogwai.foodLevel.should.equal(9);
    });
  });
    describe("dirtyLevel", function() {
    it("Mogwai gets wet and multiplies all over the place!", function() {
      var myMogwai = Object.create(Mogwai);
      myMogwai.initialize("Mogli",10,10,10);
      myMogwai.dirtyLevels();
      myMogwai.dirtyLevel.should.equal(9);
    });
  });
  describe("youLost", function() {
    it("you've lost if Mogwai is gremlin / dead / wet", function(){
      var myMogwai = Object.create(Mogwai);
      myMogwai.initialize("Mogli",10,10,10);
      myMogwai.foodLevels();
      myMogwai.dirtyLevels();
      myMogwai.playLevels();
      myMogwai.youLost();
      myMogwai.lost.should.equal(true);
    });
  });
});
