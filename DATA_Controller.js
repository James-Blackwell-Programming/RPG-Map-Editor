const data_controller = function(){

    //map dimensions
    let mapWidth = 5;
    let mapHeight = 5;

    return{

        getMapDims: function(){
            let mapDims = {
                mapWidth: mapWidth,
                mapHeight: mapHeight
            };

            return mapDims;
        }
        
    }
}();