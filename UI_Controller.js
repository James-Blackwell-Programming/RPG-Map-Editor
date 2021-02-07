
const ui_controller = function(){

    const body = document.querySelector('body');
    
    

    return{

        drawMap: function(map){
            map.mapEditorContainer.appendChild(map.mapContainer);
            map.mapEditorContainer.appendChild(map.menu.container);
            body.appendChild(map.mapEditorContainer);

            
        }
    }
}();