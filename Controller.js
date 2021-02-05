const controller = function(data, ui, map){
    
    function buildGameWorld(){
        map.genMap();
    }


    return{
        init: function(){
            buildGameWorld();
        }
    }
}(DATA_Controller, UI_Controller, map_editor);

controller.init();