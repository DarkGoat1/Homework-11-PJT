// @TODO: Uncomment the following file and complete the code
//        according to the instructions in README.md.

// Roster of player
var roster = [{
  name: "Doug",
  position: "Quarterback",
  madeTeam: true
},
{
  name: "Antonio",
  position: "Tight End",
  madeTeam: true
},
{
  name: "Nick",
  position: "Kicker",
  madeTeam: false
},
{
  name: "Ereck",
  position: "Offensive Live",
  madeTeam: false
},
{
  name: "AJ",
  position: "Line Backer",
  madeTeam: true
}];

// YOUR CODE HERE

// Create a custom filtering function
function madeteam(player) {
    return player.madeTeam === true;
  }
  
  // filter() uses the custom function as its argument
  var onteam = roster.filter(madeteam);

var offteam = roster.length - onteam.length
  
console.log(onteam);
console.log(onteam.length)
console.log(offteam)


