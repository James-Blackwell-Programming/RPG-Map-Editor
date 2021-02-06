import genContainer from './genContainer.js';
import mapEditorMenu from './mapEditorMenu.js';

//constructor for mapCell objects
function MapCell(id, div, hasPlayer, hasChest, hasForest, hasRoad, solid){
    this.id = id;
    this.div = div;
    this.hasPlayer = hasPlayer;
    this.hasChest = hasChest;
    this.hasForest = hasForest;
    this.hasRoad = hasRoad;
    this.solid = solid;
};

function genMap(mapDims){

    let root = document.documentElement;
    let totalCells = mapDims.mapWidth * mapDims.mapHeight;
    let menu = mapEditorMenu();
    let mapArr = [];

    //change map width/height according to info in mapDims
    root.style.setProperty('--map-width', mapDims.mapWidth);
    root.style.setProperty('--map-height', mapDims.mapHeight);

    let mapEditorContainer = genContainer('70vw', '90vh', 'mapEditorContainer');
    let mapContainer = genContainer('70vw', '70vh', 'mapContainer');

    //generate array of mapCells
    for(let i = 0; i < totalCells; i++){

        let div = document.createElement('div');
        div.classList.add('mapcell');

        let cell = new MapCell(i, div, false, false, false, false, false);

        div.addEventListener('click', () => {
            menu.BTNArr.forEach(BTN => {
                if(BTN.selected){
                    switch(BTN.option){
                        case 'clear':
                            cell.hasChest = false;
                            cell.hasForest = false;
                            cell.hasRoad = false;
                            cell.solid = false;
                            cell.div.style.background = 'none';                           
                            break;
                        case 'solid':
                            cell.hasChest = false;
                            cell.hasForest = false;
                            cell.hasRoad = false;
                            cell.solid = true;
                            cell.div.style.backgroundColor = 'black';
                            break;
                        case 'forest':
                            cell.hasChest = false;
                            cell.hasForest = true;
                            cell.hasRoad = false;
                            cell.solid = false;
                            cell.div.style.backgroundColor = 'darkgreen';
                            break;
                        case 'road':
                            cell.hasChest = false;
                            cell.hasForest = false;
                            cell.hasRoad = true;
                            cell.solid = false;
                            cell.div.style.backgroundColor = 'lightgrey';
                            break;
                    }
                    console.log(cell);
                }
            });
        });
        mapArr.push(cell);
    }

    //put MapCell divs into container css grid
    mapArr.forEach(cell => {
        mapContainer.appendChild(cell.div);
    });



    mapEditorContainer.appendChild(mapContainer);
    mapEditorContainer.appendChild(menu.container);
    

    return mapEditorContainer;
}

export default genMap;