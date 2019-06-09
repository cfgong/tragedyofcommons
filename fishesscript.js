var fish_url = "fish2.png";
var numFish = 8;
var maxFish = 8;
var picture_height = 50;
var picture_width = 50;
var x_locations = [120, 250, 90, 475, 370, 360, 275, 175];
var y_locations = [175, 175, 100, 175, 220, 120, 90, 120];
var fisherman_url = "fisherman.png";

var svg = d3
  .select("#pond")
  .append("svg")
  .attr({
    width: 1000,
    height: 500,
    border: "1px solid #ccc"
  });

function drawPond() {
  eraseEverything();
  svg
    .append("svg:image")
    .attr("xlink:href", "pond.png")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 600)
    .attr("height", 300);
}

// function to draw the fisherman to the right side of the pond
function drawFisherman() {
  svg
    .append("svg:image")
    .attr("xlink:href", fisherman_url)
    .attr("x", 700)
    .attr("y", 0)
    .attr("width", 100)
    .attr("height", 300)
    .attr("id", "fisher");
}

function drawFish() {
  var i;
  for (i = 0; i < numFish; i++) {
    var fish_id = "fish" + i;
    svg
      .append("svg:image")
      .attr("xlink:href", fish_url)
      .attr("x", x_locations[i])
      .attr("y", y_locations[i])
      .attr("width", picture_width)
      .attr("height", picture_height)
      .attr("id", fish_id);
  }
}

// This function is used in the animation when the fisherman is fishing
// n is the number of fish that the user has chosen to fish (remove)
// draws the fisherman and removes fish one by one
function removeFish(n) {
  var fisherman_id = "#fisher";
  if (svg.select(fisherman_id)[0][0] == null) {
    drawFisherman();
  }
  var i;
  var numRemoved = 0;
  for (i = 0; i < maxFish; i++) {
    if (numRemoved == n) {
      break;
    }
    var fish_id = "#fish" + i;
    var total_delay = 1500 * (i + 1) + 1500;
    if (svg.select(fish_id)[0][0] != null) {
      $(fish_id)
        .delay(1500 * i)
        .fadeOut(1500, function() {
          $(this).remove();
        });
      var xpos = "" + x_locations[i];
      var ypos = y_locations[i] - 100;
      var ypos_string = "" + ypos;
      //fisherman_trans.delay(function(d,i){ return 1500*i; }).attr("transform", trans).duration(1000);
      //svg.select(fisherman_id).attr('x', xpos);
      //svg.select(fisherman_id).attr('y', ypos);
      $(fisherman_id).animate({ x: xpos, y: ypos_string }, 1500);

      /*    setTimeout(function () {
        d3.select(fish_id).remove();
      }, total_delay);*/
      numRemoved++;
      numFish--;
    }
  }
  if (numRemoved != n) {
    alert("Error: Not Enough Fish to Remove");
  }
}

// Use this function when we want to erase all fish WITHOUT fading out transition
function eraseAllFish() {
  var i;
  for (i = 0; i < maxFish; i++) {
    var fish_id = "#fish" + i;
    if (svg.select(fish_id)[0][0] != null) {
      d3.select(fish_id).remove();
    }
  }
}

// Redraws the fish when you need to add n number of fish back
function addFish(n) {
  var numbRemoved = 0;
  for (i = 0; i < maxFish; i++) {
    if (numbRemoved == n) {
      break;
    }
    var fish_id = "#fish" + i;
    if (svg.select(fish_id)[0][0] == null) {
      svg
        .append("svg:image")
        .attr("xlink:href", fish_url)
        .attr("x", x_locations[i])
        .attr("y", y_locations[i])
        .attr("width", picture_width)
        .attr("height", picture_height)
        .attr("id", fish_id);
      numbRemoved++;
    }
  }
  if (numbRemoved != n) {
    alert("Max Number of fish Reached");
  }
  numFish += n;
}

// Erases everything - including the pond
function eraseEverything() {
  svg.selectAll("*").remove();
}

function setUp() {
  drawPond();
  drawFish();
}

drawPond();
drawFish();
