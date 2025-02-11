import { Grid } from "./grid.js";
import { Tile } from "./tile.js";
const gameBoard = document.getElementById("game-board");

const grid = new Grid(gameBoard);//хранит все ячейки ..

grid.getRandomEmptyCell().LinkTile(new Tile(gameBoard));
grid.getRandomEmptyCell().LinkTile(new Tile(gameBoard));