// import './component/listinput.css';
import './listinput.css'

export const ListInput = ({ item, deleteItem, editItem }) => {
  return (
    <li className="list-item">
      <div>
        <strong>{item.firstName} {item.lastName}</strong>: {item.comment}
      </div>
      <div>
        <button onClick={() => deleteItem(item.id)}>Delete</button>
        <button onClick={() => editItem(item)}>Edit</button>
      </div>
    </li>
  );
};
