
function getCellPos(mapWidth, cellID){
    
    let pos = {
        column: '',
        row: ''
    };

    pos.column = cellID % mapWidth;
    pos.row = Math.floor(cellID / mapWidth);

    return pos;
}

export default getCellPos;