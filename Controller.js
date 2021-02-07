import genMap from './map_editor.js';


const controller = function(data, ui){

    //main UI elements
    let gameUI = {
        map: genMap(data.getMapDims())
    }
    
    function buildGameWorld(){
        ui.drawMap(gameUI.map);

        
        addEventListeners();
        
    }

    //event listeners
    function addEventListeners(){
        //event listeners for map editor cells
        gameUI.map.mapArr.forEach(cell => {
            cell.div.addEventListener('click', () => {
                gameUI.map.menu.BTNArr.forEach(BTN => {
                    if (BTN.selected) {
                        switch (BTN.option) {
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
                                cell.div.style.backgroundColor = 'green';
                                break;
                            case 'road':
                                cell.hasChest = false;
                                cell.hasForest = false;
                                cell.hasRoad = true;
                                cell.solid = false;
                                cell.div.style.backgroundColor = 'lightgrey';
                                break;
                        }
                    }
                })
            })
        })
    }


    return{
        init: function(){
            buildGameWorld();
        }
    }
}(data_controller, ui_controller);

controller.init();