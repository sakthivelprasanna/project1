// import { ListInput } from "./listinput";

// export const List = ({ values }) => {
//   return (
//     <>
//       {values.map((inputValues, index) => (
//         <ListInput inputValues={inputValues} key={index} />
//       ))}
//     </>
//   );
// };
// import { ListItem } from './ListItem';

// import {ListItem} from "./component/listinput"
import { ListInput } from "./listinput";

export const List = ({ items, deleteItem, editItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <ListInput
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      ))}
    </ul>
  );
};
