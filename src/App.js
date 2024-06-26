// import { useEffect, useRef, useState } from 'react';
// import './App.css';
// import { Input } from './component/input';
// import { List } from './component/list';

// function App() {
//   const [values, setValues] = useState([]);
//   const refButton = useRef();

//   const appSubmitValue = (val) => {
//     setValues([...values, val]);
//   };

//   useEffect(() => {
//     if (values.length === 3) {
//       alert("maximum limit reached");
//       refButton.current.disabled = true;
//     }
//   }, [values]);

//   console.log(values);

//   return (
//     <div className="App">
//       <Input submitValue={appSubmitValue} refButton={refButton} />
//       <List values={values} />
//     </div>
//   );
// }

// export default App;

import { useState } from 'react';
import './App.css';
import { Input } from './component/input';
import {List} from './component/list'

function App() {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const handleAddItem = (item) => {
    setItems([...items, { ...item, id: items.length + 1 }]);
  };

  const handleUpdateItem = (updatedItem) => {
    setItems(items.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
    setEditItem(null);
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEditItem = (item) => {
    setEditItem(item);
  };

  return (
    <div className="App">
      <Input addItem={handleAddItem} updateItem={handleUpdateItem} editItem={editItem} />
      <List items={items} deleteItem={handleDeleteItem} editItem={handleEditItem} />
    </div>
  );
}

export default App;

