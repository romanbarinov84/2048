import { Grid } from "./grid.js";
import { Tile } from "./tile.js";
const gameBoard = document.getElementById("game-board");

const grid = new Grid(gameBoard);//хранит все ячейки ..

grid.getRandomEmptyCell().LinkTile(new Tile(gameBoard));
grid.getRandomEmptyCell().LinkTile(new Tile(gameBoard));
setupInputOnce();


function setupInputOnce(){
  
   window.addEventListener("keydown", handleInput, {once:true});//функция на одно нажатие клавиши ,затем handleInput//
   
}

function handleInput(event){ 
  
     
    switch(event.key){
        case "ArrowUp":
            moveUp();
            break;

            case "ArrowDown":
                break;

                case "ArrowLeft":
                    break;

                    case "ArrowRight":
                        break;

                        default:
                            setupInputOnce();
                            return;
    }
    
    setupInputOnce(); //после нажатия клавиши вызывается функция на еще одно нажатие
}

function moveUp(){
    slideTiles(grid.cellsGroupedByColumn);
}

function slideTiles(groupedCells){
    groupedCells.array.forEach(group => slideTilesInGroup(group));
    
}

 function slideTilesInGroup(group){
    for(let i = 1; i < group.length; i++){
      if(group[i].isEmpty){
        continue;
      }
      const cellWithTile = group[i];

      let targetCell;
      let j = i -1;
      while(i >=0 && group[i].canAccept(cellWithTile.linkedTile)){
        targetCell = group[i];
        j--;
      }
      if(!targetCell){
        continue;
      }
      if(targetCell.isEmpty()){
        targetCell.LinkTile(cellWithTile.linkedTile);
      }
      else{
        targetCell.linkedTileForMerge(cellWithTile.linkedTile)
      }
      cellWithTile.unlinkTile()
    }
 }