import { useState, useEffect } from 'react';
import './input.css';

export const Input = ({ addItem, updateItem, editItem }) => {
  const [inputValues, setInputValues] = useState({
    firstName: '',
    lastName: '',
    comment: '',
  });

  useEffect(() => {
    if (editItem) {
      setInputValues({
        firstName: editItem.firstName,
        lastName: editItem.lastName,
        comment: editItem.comment,
      });
    } else {
      setInputValues({
        firstName: '',
        lastName: '',
        comment: '',
      });
    }
  }, [editItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (editItem) {
      updateItem({ ...inputValues, id: editItem.id });
    } else {
      addItem(inputValues);
    }
    setInputValues({
      firstName: '',
      lastName: '',
      comment: '',
    });
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={inputValues.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={inputValues.lastName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Comment"
        name="comment"
        value={inputValues.comment}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>{editItem ? 'Update' : 'Add'}</button>
    </div>
  );
};
