import genContainer from './genContainer.js';

function OptionState(div, option, buttonText, selected){
    this.div = div;
    this.option = option; //selected option
    this.buttonText = buttonText;
    this.selected = selected; //true/false
};

//options for switch
let possibleOptions = {
    clear: 'clear',
    solid: 'solid',
    forest: 'forest',
    road: 'road'
}

//button text
let buttonTextList = {
    clear: 'Clear Cell',
    solid: 'Solid Cell',
    forest: 'Forest Cell',
    road: 'Road Cell'
}

function mapEditorMenu(){

    let menuContainer = genContainer('70vw', '20vh', 'menuContainer');
    let optionsBTNArr = [];

    //options buttons
    optionsBTNArr.push(new OptionState(genContainer('20%', '30%', 'clearButton'), possibleOptions.clear, buttonTextList.clear, false));
    optionsBTNArr.push(new OptionState(genContainer('20%', '30%', 'solidButton'), possibleOptions.solid, buttonTextList.solid, false));
    optionsBTNArr.push(new OptionState(genContainer('20%', '30%', 'forestButton'), possibleOptions.forest, buttonTextList.forest, false));
    optionsBTNArr.push(new OptionState(genContainer('20%', '30%', 'roadButton'), possibleOptions.road, buttonTextList.road, false));

    //add button text
    optionsBTNArr.forEach(BTNText =>{
        BTNText.div.innerHTML = BTNText.buttonText;
    });
    //add buttons to container
    optionsBTNArr.forEach(BTN => {
        menuContainer.appendChild(BTN.div);
    });

    optionsBTNArr.forEach(item => {    
        item.div.addEventListener('click', () => {
            optionsBTNArr.forEach(BTNSelected => {
                BTNSelected.selected = false;
            });

            item.selected = true;

            checkState();
            });           
    });

    function checkState(){
        optionsBTNArr.forEach(item => {
            if(item.selected){
                item.div.style.backgroundColor = 'green';
            }else{
                item.div.style.backgroundColor = 'white';
            }
        });
    }

    let menuItems = {
        BTNArr: optionsBTNArr,
        container: menuContainer
    }


    return menuItems;
}

export default mapEditorMenu;