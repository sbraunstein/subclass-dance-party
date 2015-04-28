
var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps); // ??? for args
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
}// Dancer.step + toggle


/*
var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = blinkyDancer.step;

    blinkyDancer.step = function(){
      // call the old version of step at the beginning of any call to this new version of step
      oldStep();
      // toggle() is a jQuery method to show/hide the <span> tag.
      // See http://api.jquery.com/category/effects/ for this and
      // other effects you can use on a jQuery-wrapped html tag.
      blinkyDancer.$node.toggle();
    };

    return blinkyDancer;
  };
*/


////////////////////////////////////////////////////////////////////////////////////////

// var Dancer = function(top, left, timeBetweenSteps) {
//   this.top = top;
//   this.left = left;
//   this.timeBetweenSteps = timeBetweenSteps;
//   this.$node = $('<span class="dancer"></span>');
//   this.step();
//   this.setPosition(top, left);

// }

// Dancer.prototype.step = function(){
//   setTimeout(step, this.timeBetweenSteps);
// };

// Dancer.prototype.setPosition = function(top, left){
//  var styleSettings = {
//       top: top,
//       left: left
//     };
//     this.$node.css(styleSettings);
//   };
// }


