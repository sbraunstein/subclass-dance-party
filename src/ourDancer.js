var OurDancer = function (top, left, timeBetweenSteps){
	Dancer.call(this, top, left, timeBetweenSteps);
	this.top = top;
  	this.left = left;
  	this.timeBetweenSteps = timeBetweenSteps;
  	this.$node = $('<div class="ourDancer"><img src="https://accordingtothisgal.files.wordpress.com/2013/08/cha-cha-slide.gif" height="20" width="20"></div>');
}
OurDancer.prototype = Object.create(Dancer.prototype);
OurDancer.prototype.constructor = OurDancer;