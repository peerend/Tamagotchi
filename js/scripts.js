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
      if((this.playLevel <=0) || (this.foodLevel <=0) || (this.dirtyLevel) <= 0){
        this.lost = false;
        //return this.youLose;
      } else {
        this.lost = true};
  },
  displayOutput: function() {
    $("#output-food").text(this.foodLevel);
    $("#output-clean").text(this.dirtyLevel);
    $("#output-activity").text(this.playLevel);
  }
}

$(document).ready(function(){

  $("form#MogwaiGame").find("input").focus();

  $('form#MogwaiGame').submit(function(event){
    $('#column2, #column3, #output-row').show();
    event.preventDefault();
    var afroSamurai = Object.create(Mogwai);
    var mogwaiName = $('#mogwaiName').val();
    afroSamurai.initialize(mogwaiName, 10, 10, 10);
    $("#output-name").text(afroSamurai.creature);
    afroSamurai.displayOutput();
    $("#check-btn").click(function() {
      afroSamurai.youLost();
      console.log(afroSamurai.foodLevel);
      afroSamurai.displayOutput();
      if (!afroSamurai.lost){
        alert('Sorry ' + $('#mogwaiName').val() +' is dead:(');
        $('#column2, #column3, #output-row').hide();
      }else {
        alert('Hurray! ' + $('#mogwaiName').val() +' is alive:)');
      }
    });
    $("#feed-btn").click(function(){
      afroSamurai.foodLevels();
      afroSamurai.displayOutput();
    });
    $("#wash-btn").click(function(){
      afroSamurai.dirtyLevels();
      afroSamurai.displayOutput();
    });
    $("#activity-btn").click(function(){
      afroSamurai.playLevels();
      afroSamurai.displayOutput();
    });
  });
});