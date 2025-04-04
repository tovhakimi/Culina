import React, {useState, useEffect} from 'react';
import axios from 'axios';

function PersonalMenu(){
    const [menu, setMenu] = useState([]);
    const [itemName, setItemName] = useState('');

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try{
            const respone = await axios.get('/personal-menu');
            setMenu(respone.data);
        } catch(error){
            console.log('Error fetching menu: ', error);
        }
    };

    const addItem = async () => {
        if (!itemName) return alert('Enter a valid item name');
    
        try {
          await axios.post('/personal-menu', { name: itemName });
          fetchMenu(); // Refresh menu
          setItemName(''); // Clear input field
        } catch (error) {
          console.error('Error adding item:', error.response.data.message);
        }
    };

    const removeItem = async (name) => {
        try {
          await axios.delete('/personal-menu', { data: { name } });
          fetchMenu(); // Refresh menu
        } catch (error) {
          console.error('Error removing item:', error.response.data.message);
        }
    };

    return (
        <div>
        <h1>Your Personal Menu</h1>
        <input 
            type="text" 
            value={itemName} 
            onChange={(e) => setItemName(e.target.value)} 
            placeholder="Add an item" 
        />
        <button onClick={addItem}>Add Item</button>

        <ul>
            {menu.map((item, index) => (
            <li key={index}>
                {item.name} <button onClick={() => removeItem(item.name)}>Remove</button>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default PersonalMenu;