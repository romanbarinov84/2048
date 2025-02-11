export class Cell {
    constructor(gridElement,x , y){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        gridElement.append(cell);
        this.x = x;
        this.y = y;
    }

    LinkTile(tile){ // сохранят плитку тайл внутри ячейки
        tile.setXY(this.x , this.y);
        this.LinkedTile = tile;
    }
    isEmpty(){
        return !this.LinkedTile; //вернет false or true взависимости от того есть ли у ячейки привязаная плитка
    }
}