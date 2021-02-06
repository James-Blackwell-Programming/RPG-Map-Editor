import genMap from './map_editor.js';

const controller = function(data, ui){

    //main UI elements
    let gameUI = {
        map: genMap(data.getMapDims())
    }
    
    function buildGameWorld(){
        ui.drawMap(gameUI.map);
        
    }


    return{
        init: function(){
            buildGameWorld();
        }
    }
}(data_controller, ui_controller);

controller.init();