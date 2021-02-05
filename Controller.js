const controller = function(data, ui, map){
    
    function buildGameWorld(){
        map.genMap();
        
    }


    return{
        init: function(){
            buildGameWorld();
        }
    }
}(data_controller, ui_controller, mapEditor);

controller.init();