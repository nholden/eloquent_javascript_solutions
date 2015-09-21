function SmartPlantEater() {
  this.energy = 20;
}
SmartPlantEater.prototype.act = function(view) {
  var space = view.find(" ");
  if ((this.energy > 60 && space) && Math.random() > 0.9)
    return {type: "reproduce", direction: space};
  var plant = view.find("*");
  if ((this.energy < 80 && plant) && Math.random() > 0.5)
    return {type: "eat", direction: plant};
  if (space)
    return {type: "move", direction: space};
};

animateWorld(new LifelikeWorld(
  ["############################",
   "#####                 ######",
   "##   ***                **##",
   "#   *##**         **  O  *##",
   "#    ***     O    ##**    *#",
   "#       O         ##***    #",
   "#                 ##**     #",
   "#   O       #*             #",
   "#*          #**       O    #",
   "#***        ##**    O    **#",
   "##****     ###***       *###",
   "############################"],
  {"#": Wall,
   "O": SmartPlantEater,
   "*": Plant}
));
