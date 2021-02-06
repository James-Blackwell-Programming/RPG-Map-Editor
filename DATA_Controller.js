const data_controller = function(){

    //map dimensions
    let mapWidth = 21;
    let mapHeight = 21;

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