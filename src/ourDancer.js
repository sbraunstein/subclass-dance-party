var OurDancer = function (top, left, timeBetweenSteps){
	Dancer.call(this, top, left, timeBetweenSteps);
  	this.timeBetweenSteps = timeBetweenSteps;
  	this.$node = $('<div class="ourDancer"><img src="http://37.media.tumblr.com/788b9fc7545f4b1631b24283da40b971/tumblr_mt0wfwLWt31rby4vso1_500.gif" height="140" width="140"></div>'); 
  	this.setPosition(top, left);
  	this.speed = 1000;
}
OurDancer.prototype = Object.create(Dancer.prototype);
OurDancer.prototype.constructor = OurDancer;
OurDancer.prototype.step = function(){
	Dancer.prototype.step.call(this);
	var x = Math.random() * $(document).width()
	if(clicked){
		x=100;
	}
	var y = Math.random() * $(document).height()
	this.$node.animate({"left": x+"px", "top": y+"px"}, this.speed);
}


var AnimatedDancer = function (top, left, timeBetweenSteps){
	OurDancer.call(this, top, left, timeBetweenSteps);
  	this.timeBetweenSteps = timeBetweenSteps;
  	this.$node = $('<div class="animatedDancer"><img src="http://i135.photobucket.com/albums/q156/Dark_Princess_Kaori/TwilightSparkleDancing_zps062e4722.gif" height="140" width="140"></div>'); 
  	this.setPosition(top, left);
  	// this.speed = 800; 
}
AnimatedDancer.prototype = Object.create(OurDancer.prototype);
AnimatedDancer.prototype.constructor = AnimatedDancer;


var DeanDancer = function(top, left, timeBetweenSteps){
	OurDancer.call(this, top, left, timeBetweenSteps);
	this.timeBetweenSteps = timeBetweenSteps;
	this.$node = $('<div class="deanDancer"><img src="http://38.media.tumblr.com/a4a04a7621085b39f27d3db61dd0b79a/tumblr_mt31gdGCAU1rf3zr7o3_400.gif" height="140" width="140"></div>');
	this.setPosition(top, left);
	// this.speed = 5000;
}
DeanDancer.prototype = Object.create(OurDancer.prototype);
DeanDancer.prototype.constructor = DeanDancer;

