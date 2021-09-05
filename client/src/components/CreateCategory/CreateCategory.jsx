import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { addProdct, getCategories } from '../../redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';

function addProdcts () {

  const dispatch = useDispatch();
  const history = useHistory();
  const [input, setInput] = useState({
    name: '',
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addCategory(input));
    alert("Categoría creada exitosamente.");
    setInput({
      name: '',
    });
    history.push('/create');
  };

  return (
    <div>
      <h1>Cargar productos:</h1>
      <form onSubmit={e => {handleSubmit(e)}}>
        <div>
          <label>Nombre del producto:</label>
          <input
            type='text'
            value={input.name}
            name='name'
            onChange={e => handleChange(e)}>
          </input>
        </div>
        <div>
          <button type='submit'>Crear categoria</button>
        </div>
      </form>
    </div>
  );
};