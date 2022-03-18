const blackColor = document.getElementById('blackColor');
const reset = document.getElementById('reset');
const rainbow = document.getElementById('rainbow');
const eraser = document.getElementById('eraser');
const paintingGrid = document.getElementById('paintingGrid');
const slider=document.getElementById('slider')
const sliderText=document.getElementById('sliderText');
let boxSize =parseInt(document.getElementById('slider').value);
let colorWord = "black";
let number = 00;
let mouseClick = false;

function createColumn(){
    for(let j=0; j < boxSize; j++){
            grid = document.createElement('div');
            grid.setAttribute('style',' background-color: #ebebeb; border: 1px solid #dddddd; flex: 1 1 auto;');
            biggerGrid.appendChild(grid);
            grid.addEventListener('mouseover', changeColor);
    } 
}

function createRow(){
    for(let i=0; i < boxSize; i++){
            biggerGrid = document.createElement('div');
            paintingGrid.appendChild(biggerGrid);
            biggerGrid.setAttribute('style',' display: flex; flex: 1 1 auto; flex-direction: row;');
            createColumn()   
        }
} 

function createGrid(){
    removeOldGrid();
    boxSize =parseInt(document.getElementById('slider').value);
    console.log(boxSize);
    createRow();
    sliderText.textContent=`Grid size is ${boxSize}x${boxSize}`;
}
function resetGrid(){
    removeOldGrid();
    boxSize =parseInt(document.getElementById('slider').value);
    console.log(boxSize);
    createRow();
}
function removeOldGrid(){
    paintingGrid.innerHTML = ""
}    
slider.addEventListener('click', createGrid);

createGrid();

function changeColor(e){
    console.log(mouseClick)
    if(mouseClick===true){
    if(colorWord=="black"){
    e.currentTarget.style.backgroundColor= '#251825';
    console.log("1");}
    else if(colorWord=="rainbow"){
    colorR=Math.floor(Math.random()*(255))+70
    console.log(colorR);
    colorG=Math.floor(Math.random()*(255))+70
    console.log(colorR);
    colorB=Math.floor(Math.random()*(255))+70
    console.log(colorR);
    e.currentTarget.style.backgroundColor= `rgb(${colorR},${colorG},${colorB})`;
    console.log("1");}
    else if(colorWord=="white"){
    e.currentTarget.style.backgroundColor= '#ebebeb';
    console.log("3");}
    }
    paintingGrid  
}


let mouseOver = () => mouseClick = true;
let mouseOut = () => mouseClick = false;
let mouseUnClick = () => mouseClick = false;
let toBlack = () => colorWord = "black";
let toRainbow = () => colorWord ="rainbow";
let toWhite = () => colorWord = "white";

paintingGrid.addEventListener('mousedown', mouseOver)
paintingGrid.addEventListener('mouseup',mouseOut)
rainbow.addEventListener('click',toRainbow);
blackColor.addEventListener('click',toBlack)
eraser.addEventListener('click', toWhite)
reset.addEventListener('click', resetGrid)
