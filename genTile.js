import genContainer from './genContainer.js';
import getCellPos from './getCellPos.js';

function genTile(type, mapWidth, id){
    switch(type){
        case 'forest':
            let POS = getCellPos(mapWidth, id);
            let container = document.createElement('div');

            container.style.gridRow = '2 / span 3';//`${POS.row} / span 5`;
            container.style.gridColumn = '2 / span 5';//`${POS.column} / span 3`;

            container.style.backgroundColor = 'red';



            console.log(container);
    }

    return container;

    
}

export default genTile;