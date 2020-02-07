
class Board {
  constructor() {
    this.arrayDisplay = [[0,0,0,0],[0, 0,0,0],[0, 0,0,0],[0, 0,0,0]];
    this.height = 4;
    this.width = 4;
    this.point = 0;
  }
  displayBoard() {
    return this.arrayDisplay;
  }

  generateTile(value){
    var ofZero = []; // i = rows, j = cols
    for (var i = this.arrayDisplay.length - 1; i >= 0; i--) {
      for (var j = this.arrayDisplay[i].length - 1; j >= 0; j--) {
         if (this.arrayDisplay[i][j] == 0){
          ofZero.push([i,j]);
         }
      }
    }
    var k = Math.floor(Math.random() * ofZero.length);
    var position = ofZero[k];
    this.arrayDisplay[position[0]][position[1]] = value; 
  }

  moveTilesDown(ifcomp){
      // i = rows, j = cols
      var done = false;
      for (var j = this.width - 1; j >= 0; j--) {
          var i = 3; // this is the collum number
          while (done == false){
            var tile = this.arrayDisplay[i][j];
            var distanceFromEdge = (this.height-1)-i;
            var thingj = j;
            var thingi = i; // this changes + 1; if moved down
            //console.log(i,j,distanceFromEdge);
            for (var k = distanceFromEdge; k > 0; k--) {
              if (this.arrayDisplay[thingi+1][thingj] == 0){
                this.arrayDisplay[thingi][thingj] = 0;
                this.arrayDisplay[thingi+1][thingj] = tile;
                thingi = thingi+1;

              }
              else if (this.arrayDisplay[thingi+1][thingj] == tile){
                if (ifcomp == true){
                // if second time dont do this
                  this.arrayDisplay[thingi][thingj] = 0;
                  this.arrayDisplay[thingi+1][thingj] = tile+tile;
                  tile = this.arrayDisplay[thingi+1][thingj];
                  i = i -1
                  this.point = this.point + 1;
                  break;
                }
                //console.log(ifcomp);
              } 
              else{
                var fricccckk;
                }

              }
              i = i - 1;
              //console.log(i);
              if (i <= -1){
                done = true;
              }
            }
          done = false;

          }
        }
moveTilesUp(ifcomp){

      var done = false;
      for (var j = 0; j < this.width ; j++) {
          var i = 0; // this is the collum number
          while (done == false){
            var tile = this.arrayDisplay[i][j];
            var distanceFromEdge = i;
            var thingj = j;
            var thingi = i; // this changes + 1; if moved down
            //console.log(i,j,distanceFromEdge);
            for (var k = distanceFromEdge; k > 0; k--) {
              if (this.arrayDisplay[thingi-1][thingj] == 0){
                this.arrayDisplay[thingi][thingj] = 0;
                this.arrayDisplay[thingi-1][thingj] = tile;
                thingi = thingi-1;

              }
              else if (this.arrayDisplay[thingi-1][thingj] == tile){
                if (ifcomp == true){
                // if second time dont do this
                  this.arrayDisplay[thingi][thingj] = 0;
                  this.arrayDisplay[thingi-1][thingj] = tile+tile;
                  tile = this.arrayDisplay[thingi-1][thingj];
                  i = i +1
                  this.point = this.point + 1;

                  break;
                }
                //console.log(ifcomp);
              } 
              else{
                var fricccckk;
                }

              }
              i = i + 1;
              //console.log(i);
              if (i >= 4){
                done = true;
              }
            }
          done = false;

          }


          /////
        }

moveTilesRight(ifcomp){


     var done = false;
      for (var i = this.height - 1; i >= 0; i--) {
          var j = 3; // this is the collum number
          while (done == false){
            var tile = this.arrayDisplay[i][j];
            var distanceFromEdge = (this.width-1)-j;
            var thingj = j;
            var thingi = i; // this changes + 1; if moved down
            //console.log(i,j,distanceFromEdge);
            for (var k = distanceFromEdge; k > 0; k--) {
              if (this.arrayDisplay[thingi][thingj+1] == 0){
                this.arrayDisplay[thingi][thingj] = 0;
                this.arrayDisplay[thingi][thingj+1] = tile;
                thingj = thingj+1;

              }
              else if (this.arrayDisplay[thingi][thingj+1] == tile){
                if (ifcomp == true){
                // if second time dont do this
                  this.arrayDisplay[thingi][thingj] = 0;
                  this.arrayDisplay[thingi][thingj+1] = tile+tile;
                  tile = this.arrayDisplay[thingi][thingj+1];
                  j = j -1
                  this.point = this.point + 1;

                  break;
                }
                //console.log(ifcomp);
              } 
              else{
                var fricccckk;
                }

              }
              j = j - 1;
              //console.log(i);
              if (j <= -1){
                done = true;
              }
            }
          done = false;

          }
        //////////////////////
        }
moveTilesLeft(ifcomp){

     var done = false;
      for (var i = this.height - 1; i >= 0; i--) {
          var j = 0; // this is the collum number
          while (done == false){
            var tile = this.arrayDisplay[i][j];
            var distanceFromEdge = j;
            var thingj = j;
            var thingi = i; // this changes + 1; if moved down
            //console.log(i,j,distanceFromEdge);
            for (var k = distanceFromEdge; k > 0; k--) {
              if (this.arrayDisplay[thingi][thingj-1] == 0){
                this.arrayDisplay[thingi][thingj] = 0;
                this.arrayDisplay[thingi][thingj-1] = tile;
                thingj = thingj-1;

              }
              else if (this.arrayDisplay[thingi][thingj-1] == tile){
                if (ifcomp == true){
                // if second time dont do this
                  this.arrayDisplay[thingi][thingj] = 0;
                  this.arrayDisplay[thingi][thingj-1] = tile+tile;
                  tile = this.arrayDisplay[thingi][thingj-1];
                  j = j +1
                  this.point = this.point + 1;

                  break;
                }
                //console.log(ifcomp);
              } 
              else{
                var fricccckk;
                }

              }
              j = j + 1;
              //console.log(i);
              if (j >= 4){
                done = true;
              }
            }
          done = false;

          }
        }
  getElement(i,j,dd){
    if (i < 0 || i >= this.height || j < 0 || j >= this.width){
      return(dd);
    }
    else{
    return(this.arrayDisplay[i][j]);
  }
  }
  checkIfLose(board){
      //check if losing state
    var times = 0;
    for (var i = 0; i < this.height ; i++) {
      for (var j = 0; j < this.width ; j++) {
        var arrayTile = board.getElement(i,j,0);
        
        //check up, down, left a right
        // up //////////////
        if (board.getElement(i-1,j,0) != 0 && board.getElement(i-1,j,0) != board.getElement(i,j,0)){
          times += 1;
        }
        if (board.getElement(i+1,j,0) != 0 && board.getElement(i+1,j,0) != board.getElement(i,j,0)){
          times +=1;
        }
        if (board.getElement(i,j-1,0) != 0 && board.getElement(i,j-1,0) != board.getElement(i,j,0)){
          times += 1;
        }
        if (board.getElement(i,j+1,0) != 0 && board.getElement(i,j+1,0) != board.getElement(i,j,0)){
          times +=1;
        }

      }
    }
    //return false or true 
    if (times == 48){
      return(true);
    }
    else{return(false);}   
  }
  returnPoint(){
    return(this.point);
  }

}
  





class Game {
  constructor(){
    this.board = new Board();
    this.win = false;
  }

  printObject(){
    var bb = this.board.displayBoard();
    var newThing = [];
    for (var i = 0; i < bb.length ; i++) {
      var thing = [];
      for (var j = 0; j < bb.length ; j++) {
        thing.push(bb[i][j]);
      }
      newThing.push(thing);
    }
    console.log(newThing);
  }
  printObjectToHTML(direction,cando){
    var onethroughsixteen = 0;
    var bb = this.board.displayBoard();
    for (var i = 0; i < bb.length ; i++) {
      var thing = [];
      for (var j = 0; j < bb.length ; j++) {
        thing.push(bb[i][j]);
        thing.push(" ");
        onethroughsixteen = onethroughsixteen +1;
        if (bb[i][j] != 0){

        document.getElementById(String("t"+(onethroughsixteen))).innerHTML = '<div class = "tile tile-'+bb[i][j]+'"> <div class = "tile-inner">'+bb[i][j]+'</div></div>';
        }
        else{
        document.getElementById(String("t"+(onethroughsixteen))).innerHTML = "";

        }


      } 
    }
    document.getElementById("direction").innerHTML = "direction: " +direction;
    document.getElementById("points").innerHTML = "points: " +this.board.returnPoint();


    document.getElementById("iflost").innerHTML = "have you lost yet: "+this.win; // this.win is confusing, it should be this.lost


  }
  returnObject(){
   var bb = this.board.displayBoard();
    var newThing = [];
    for (var i = 0; i < bb.length ; i++) {
      var thing = [];
      for (var j = 0; j < bb.length ; j++) {
        thing.push(bb[i][j]);
      }
      newThing.push(thing);
    }
    return(newThing);
  }  
  setUpGame(){
    this.board.generateTile(2);
    this.board.generateTile(2);
    game.printObjectToHTML("none","none");
  }
  compareBeforeAndAfter(before,after){
    var checkIfSame = 0;
    for (var i = 0; i < before.length ; i++) {
      for (var j = 0; j < before.length ; j++) {
        if (before[i][j] == after[i][j]) {
          checkIfSame = checkIfSame + 1;
        }
      }
    }
    if (checkIfSame == 16) {
      return(true);

    }
    else{
      return(false)
    }
  }
  gameloop(direction){
      //average game move//////////////////////////////////////////////
      var cando = "yes";
      var before = game.returnObject();
      if (direction == "left"){
        var amountOfChanges = this.board.moveTilesLeft(true);
        var amountOfChanges = this.board.moveTilesLeft(false);

      }
      else if (direction == "up"){
        var amountOfChanges = this.board.moveTilesUp(true);
        var amountOfChanges = this.board.moveTilesUp(false);

      }
      else if (direction == "right"){
        var amountOfChanges = this.board.moveTilesRight(true);
        var amountOfChanges = this.board.moveTilesRight(false);

      }
      else if (direction == "down"){
        var amountOfChanges = this.board.moveTilesDown(true);
        var amountOfChanges = this.board.moveTilesDown(false);
      }
      else if (direction == "exit") {
        this.win = true;
      }
      else{
        console.log("Please enter right,left,down, or up!");
      }
      // check if win//////////////////////////////////////////
        if (this.board.checkIfLose(this.board) == true){
          this.win = true;
        }
      var after = game.returnObject();
       // display cloned object
      console.log(before)
      //console.log(direction)
      console.log(after)

      if (game.compareBeforeAndAfter(before,after) == false){ 
        this.board.generateTile(2);
        if (this.board.checkIfLose(this.board) == true){
          this.win = true;
        }
        // check if win//////////////////////////
        }
      else if (this.win == true){
        console.log("game over lol")
      }
      else{
        cando = "no";
        console.log("you can't go in that direction");
      }
      game.printObjectToHTML(direction,cando);


    }


    gameloop1(){ // test example
      game.printObject();
      var amountOfChanges = this.board.moveTilesLeft(true);
      var amountOfChanges = this.board.moveTilesLeft(false);

      game.printObject();
  }

}

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        game.gameloop('up');
    }
    else if (e.keyCode == '40') {
        // down arrow
        game.gameloop('down');
    }
    else if (e.keyCode == '37') {
       // left arrow
       game.gameloop('left');
    }
    else if (e.keyCode == '39') {
       // right arrow
       game.gameloop('right');
    }

}
//game.gameloop();
console.log("the game has started :o Good luck !!");
let game = new Game();
game.setUpGame();
document.onkeydown = checkKey;

//check if move did nothing. if so : don't add another 2
// add checking for game over
// make game interface
// start doing graphics

//make display function and return function 