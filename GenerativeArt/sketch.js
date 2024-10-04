// Generative Art
// Oleh Pletmintsev
// 04/10/2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const TILE_SIZE = 10;
let theTiles = [];
//let someTile;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let x = 0; x < width; x += TILE_SIZE){
    for (let y = 0; y < height; y+= TILE_SIZE){
      let someTile = spawnTile(x, y);
      theTiles.push(someTile);
    }
  }
}

function draw() {
  background(220);

  for (let myTile of theTiles){
    stroke(random(0, 255), random(0, 255), random(0, 255));
    //strokeWeight(5);
    line(myTile.x1, myTile.y1, myTile.x2, myTile.y2);
  }  
}

function spawnTile(x, y) {
  let tile;
  let choice = random(100);

  if (choice > 50) {
    //negative slope
    tile = {
      x1: x - TILE_SIZE/2,
      y1: y - TILE_SIZE/2,
      x2: x + TILE_SIZE/2,
      y2: y + TILE_SIZE/2,
    };
  }
  else {
    //positive slope
    tile = {
      x1: x - TILE_SIZE/2,
      y1: y + TILE_SIZE/2,
      x2: x + TILE_SIZE/2,
      y2: y - TILE_SIZE/2,
    };
  }

  return tile;
}