describe("Monster", function() {
  describe("initialize", function() {
    it("sets the creature type and a few other properties", function() {
      var myMonster = Object.create(Monster);
      myMonster.initialize("lil dragon", 10, 10, 10);
      myMonster.creature.should.equal("lil dragon");
      myMonster.foodLevel.should.equal(10);
      myMonster.sleepLevel.should.equal(10);
      myMonster.activityLevel.should.equal(10);
    });
  });

  describe("timePasses", function() {
    it("decreases the amount of food the Tamogatchi has left by 1", function() {
      var myMonster = Object.create(Monster);
      myMonster.initialize("lil dragon",10,10,10);
      myMonster.timePasses();
      myMonster.foodLevel.should.equal(9);
    });
  });

  describe("isAlive", function() {
    it("is alive if the food level is above 0", function() {
      var myMonster = Object.create(Monster);
      myMonster.isAlive().should.equal(true);
    });

    it("is dead if the food level is 0", function() {
      var myMonster = Object.create(Monster);
      myMonster.foodLevel = 0;
      myMonster.isAlive().should.equal(false);
    });
  });
});
