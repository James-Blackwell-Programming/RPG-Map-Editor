const ui_controller = function(){

    const body = document.querySelector('body');
    

    return{

        drawMap: function(map){
            body.appendChild(map);
        }
    }
}();