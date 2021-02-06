const data_controller = function(){

    //map dimensions
    let mapWidth = 11;
    let mapHeight = 11;

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