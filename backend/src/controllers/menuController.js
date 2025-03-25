const fs = require('fs');
const path = require('path');


function getMenu(){
    const data = fs.readFileSync(path.join(__dirname, '..', 'data', 'menu.json'), 'utf-8');
    return JSON.parse(data);
}

function addItemToMenu(item){
    const menu = getMenu();
    
    const exist = menu.some(d => d.name.toLowerCase() === item.name.toLowerCase());
    if(exist){
        throw new Error('Item already exists in the menu!');
    }
    
    menu.push(item);
    saveMenu(menu);
}

function saveMenu(menu){
    fs.writeFileSync(path.join(__dirname, '..', 'data', 'menu.json'), JSON.stringify(menu, null, 2), 'utf-8');
}

function removeItemFromMenu(item){
    const menu = getMenu();
    const updatedMenu = menu.filter(del => del.name.toLowerCase() !== item.name.toLowerCase());
    saveMenu(updatedMenu);
    return updatedMenu;
}

module.exports = {saveMenu, removeItemFromMenu, addItemToMenu};