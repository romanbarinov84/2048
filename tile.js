export class Tile {
    constructor(gridElement){
        this.tileElement = document.createElement("div");
        this.tileElement.classList.add("tile");
        this.setValue(Math.random() > 0.5 ? 2 : 4 )//когда случайное число меньше 0,5 то задаем клетке 2 
        gridElement.append(this.tileElement);
    }
    setXY(x,y){
    this.x = x;
    this.y = y;
    this.tileElement.style.setProperty("--x", x);
    this.tileElement.style.setProperty("--y", y);
    }

    setValue(value){ // для смены цвета и текста в плитке
        this.value = value 
        this.tileElement.textContent = this.value;
        const bgLightness = 100 - Math.log2(value) * 9;
        this.tileElement.style.setProperty("--bg-lightness", `${bgLightness}%`);
        this.tileElement.style.setProperty("--text-lightness", `${bgLightness < 50 ? 90 : 10}%`)
    }
}