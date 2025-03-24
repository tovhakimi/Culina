const express = require('express')
const app = express()
const { getMenu, removeItemFromMenu, addItemToMenu } = require('./controllers/menuController.js')

const port = 3000;

app.use(express.json());

app.delete('/menu', (req, res) => {
  const item = req.body;
  
  if(!item.name){
    return res.status(400).json({message: "Item name is required!"});
  }

  removeItemFromMenu(item);
  res.json({message: `Item ${item.name} removed from the menu.`});
});

app.post('/menu', (req, res) => {
  const item = req.body;

  if(!item.name){
    console.log(item.name);
    return res.status(400).json({message: "Item name is required!"});
  }

  addItemToMenu(item);
  res.status(201).json({message: "Item added."})
});

app.get('/', (req, res) => {
  res.send('Welcome to Culina!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});