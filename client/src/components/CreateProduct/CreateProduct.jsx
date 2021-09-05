import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { addProdct, getCategories } from '../../redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';

function addProdcts () {

  const dispatch = useDispatch();
  const history = useHistory();
  const categories = useSelector(e => e.categories);
  const [input, setInput] = useState({
    image_url: '',
    name: '',
    description:'',
    price: '',
    categories: [],
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    });
  };

  function handleSelect(e) {
    setInput({
      ...input,
      categories: [
        ...input.categories,
        e.target.value
      ]
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addProdct(input));
    alert("Producto creado exitosamente.");
    setInput({
      image_url: '',
      name: '',
      description: '',
      price: '',
      categories: [],
    });
    history.push('/addProducts');
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

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
          <label>Precio:</label>
          <input
            type='number'
            value={input.price}
            name='price'
            onChange={e => handleChange(e)}>
          </input>
        </div>
        <div>
          <label>Descripción:</label>
          <input
            type='text'
            value={input.description}
            name='description'
            onChange={e => handleChange(e)}>
          </input>
        </div>
        <div>
          <label>Imagen:</label>
          <input
            type='text'
            value={input.image_url}
            name='image_url'
            onChange={e => handleChange(e)}>
          </input>
        </div>
        <div>
          <select onChange={e => handleSelect(e)}>
            {categories.map(i => (
                <option value={i.name}>
                  {i.name}
                </option>
            ))}
            <ul>
              <li>{input.categories.map(i => i + ", ")}</li>
            </ul>
          </select>
          <button type='submit'>Cargar producto</button>
        </div>
      </form>
    </div>
  );
};