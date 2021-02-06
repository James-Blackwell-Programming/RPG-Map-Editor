import genContainer from './genContainer.js';

//constructor for mapCell objects
function MapCell(id, div, hasPlayer, hasChest){
    this.id = id;
    this.div = div;
    this.hasPlayer = hasPlayer;
    this.hasChest = hasChest;
};

function genMap(mapDims){

    let root = document.documentElement;
    let totalCells = mapDims.mapWidth * mapDims.mapHeight;
    let mapArr = [];

    //change map width/height according to info in mapDims
    root.style.setProperty('--map-width', mapDims.mapWidth);
    root.style.setProperty('--map-height', mapDims.mapHeight);

    let container = genContainer('70vw', '90vh', 'mapContainer');
    
    //generate array of mapCells
    for(let i = 0; i < totalCells; i++){

        let div = document.createElement('div');
        div.classList.add('mapcell');

        let cell = new MapCell(i, div, false, false);

        mapArr.push(cell);
    }

    //put MapCell divs into container css grid
    mapArr.forEach(cell => {
        container.appendChild(cell.div);
    });

    

    return container;
}

export default genMap;