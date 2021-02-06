import genContainer from './genContainer.js';
import mapEditorMenu from './mapEditorMenu.js';

//constructor for mapCell objects
function MapCell(id, div, hasPlayer, hasChest, solid){
    this.id = id;
    this.div = div;
    this.hasPlayer = hasPlayer;
    this.hasChest = hasChest;
    this.solid = solid;
};

function genMap(mapDims){

    let root = document.documentElement;
    let totalCells = mapDims.mapWidth * mapDims.mapHeight;
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

        let cell = new MapCell(i, div, false, false, false);

        div.addEventListener('click', () => {
            if(solidOptionSelected){
                cell.solid = true;

            }else{
                cell.solid = false;
            }

            if(cell.solid){
                div.style.backgroundColor = 'lightgrey';
            }
            //logs the current clicked cell
            console.log(cell);    
        });
        mapArr.push(cell);
    }

    //put MapCell divs into container css grid
    mapArr.forEach(cell => {
        mapContainer.appendChild(cell.div);
    });

    mapEditorContainer.appendChild(mapContainer);
    mapEditorContainer.appendChild(mapEditorMenu());
    

    return mapEditorContainer;
}

export default genMap;