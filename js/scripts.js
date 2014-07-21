var Mogwai = {
  initialize : function(creature, foodLevel, playLevel, dirtyLevel){
    this.creature = creature;
    this.foodLevel = foodLevel; //1 out of 4 feedings = after midnight
    this.playLevel = playLevel; //1 out every 20 time mogwai gets play he is exposed to sunlight
    this.dirtyLevel = dirtyLevel; //1 of 8 mogwai cleaned it gets wet
    this.lost;
  },
  playLevels : function (){
    var playRisk = Math.floor((Math.random() * 20) + 1);
    if (playRisk === 1){
      this.playLevel = this.playLevel - 9;
    }
  },
  foodLevels : function (){
    var foodRisk = Math.floor((Math.random() * 4) + 1);
    if (foodRisk === 1){
      this.foodLevel = this.foodLevel - 1;
    }
  },
  dirtyLevels : function(){
    var dirtyRisk = Math.floor((Math.random() * 8) + 1);
    if (dirtyRisk === 1){
      this.dirtyLevel = this.dirtyLevel-1;
    }
  },
  youLost : function(){
      if(this.playLevel <=0 || this.foodLevel <=0 || this.dirtyLevel <= 0){
        this.lost = true;
        //return this.youLose;
      } else {
        this.lost = false};
  }
}

$(document).ready(function(){
  $('form#MogwaiGame').submit(function(event){

  var afroSamurai = Object.create(Mogwai);
  afroSamurai.initialize('Afro Samurai', 10, 10, 10);
  console.log(afroSamurai);
  $('#userPlay').onClick(afroSamurai.playLevels());
  $('#userFood').onClick(afroSamurai.foodLevels());
  $('#userDirty').onClick(afroSamurai.dirtyLevels());

  if (afroSamurai.lost === true){
    $('#result');
  };

  return afroSamurai.lost
  event.preventDefault();
  });
});

//when button is clicked, s

  // var myMonster = Object.create(Monster);
  // // myMonster.initialize(inputtedCreature, inputtedFoodLevel, inputtedPet, inputtedSleepLevel, inputtedActivityLevel);
  // timePasses: function(){
  //   setInterval(function(){
  //     this.foodLevel = this.foodLevel-1,
  //     this.playLevel = this.playLevel-1,
  //     this.dirtyLevel = this.dirtyLevel-1
  //   },1000);
