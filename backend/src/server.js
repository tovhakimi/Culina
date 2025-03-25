const express = require('express')
const app = express()
const { getMenu, removeItemFromMenu, addItemToMenu } = require('./controllers/menuController.js')

const port = 3000;

app.use(express.json());

app.delete('/personal-menu', (req, res) => {
  const item = req.body;
  
  if(!item.name){
    return res.status(400).json({message: "Item name is required!"});
  }

  removeItemFromMenu(item);
  res.json({message: `Item ${item.name} removed from the menu.`});
});

app.post('/personal-menu', (req, res) => {
  const item = req.body;

  if(!item.name){
    console.log(item.name);
    return res.status(400).json({message: "Item name is required!"});
  }
  try{
    addItemToMenu(item);
    res.status(201).json({message: "Item added."})
  } catch (error) {
    res.status(400).json({message: error.message})
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to Culina!');
});

app.get('/', (req, res) => {
  res.json(getMenu());
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});