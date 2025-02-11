import { Cell } from "./cell.js";


const GRID_SIZE = 4;
const CELLS_COUNT = GRID_SIZE * GRID_SIZE



export class Grid{
    constructor(gridElement){     //gridElement это ячейка 
        this.cells = [];//массив для хранения ячеек..
     for(let i = 0; i < CELLS_COUNT; i++){
        this.cells.push(
         new Cell(gridElement, i%GRID_SIZE , Math.floor(i / GRID_SIZE))
        )
     }
    }
    getRandomEmptyCell(){
        const emptyCells = this.cells.filter(cell => cell.isEmpty()); //отфильтровываем пустые ячейки
        const randomIndex = Math.floor(Math.random() * emptyCells.length);//определяем случайную пустую ячейку
        return emptyCells[randomIndex] //случайная ячейка со случайным индексом
    }
}