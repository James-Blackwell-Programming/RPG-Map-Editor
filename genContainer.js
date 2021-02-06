function genContainer(width, height, id){

    let container = document.createElement('div');

    container.style.width = width;
    container.style.height = height;
    container.setAttribute('id', id);

    container.classList.add('container');

    return container;
}

export default genContainer;