var Monster = {
  initialize : function(creature, foodLevel, sleepLevel, activityLevel){
    this.creature = creature,
    this.foodLevel = foodLevel,
    this.sleepLevel = sleepLevel,
    this.activityLevel = activityLevel
  },
  timePasses: function(){
    setInterval(function(){
      this.foodLevel = this.foodLevel-1,
      this.sleepLevel = this.sleepLevel-1,
      this.activityLevel = this.activityLevel-1
    },1000);
  }
}


//when button is clicked, s

  // var myMonster = Object.create(Monster);
  // myMonster.initialize(inputtedCreature, inputtedFoodLevel, inputtedPet, inputtedSleepLevel, inputtedActivityLevel);
