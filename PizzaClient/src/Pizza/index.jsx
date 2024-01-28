import { useState, useEffect } from 'react';
import PizzaList from './PizzaList';

const term = 'Pizza';
const Pizza = () => {
  const [data, setData] = useState([]);
  const [maxId, setMaxId] = useState(0);

  const fetchPizzaData = () => {
    const pizzaData = [
      { id: 1, name: 'Margherita', description: 'Tomato sauce, mozzarella, and basil' },
      { id: 2, name: 'Pepperoni', description: 'Tomato sauce, mozzarella, and pepperoni' },
      { id: 3, name: 'Hawaiian', description: 'Tomato sauce, mozzarella, ham, and pineapple' },
    ];

    setData(pizzaData);
    setMaxId(Math.max(...pizzaData.map((pizza) => pizza.id)));
  };

  const handleCreate = (item) => {
    const newItem = { ...item, id: maxId + 1 };
    setData([...data, newItem]);
    setMaxId(maxId + 1);
  };

  const handleUpdate = (item) => {
    const updatedData = data.map((pizza) => (pizza.id === item.id ? item : pizza));
    setData(updatedData);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((pizza) => pizza.id !== id);
    setData(updatedData);
  };

  return (
    <div>
      <div>
        <PizzaList
          name={term}
          data={data}
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Pizza;
