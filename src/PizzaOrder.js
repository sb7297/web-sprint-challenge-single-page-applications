import React, { useState } from 'react';
import * as Yup from 'yup';

const PizzaOrder = function () {
  const [form, setForm] = useState({
    name: '',
    pizzaSize: 'S',
    pepperoni: false,
    peppers: false,
    spinach: false,
    anchovies: false,
    specialInstructions: ''
  });

  const [nameError, setNameError] = useState('name must be at least 2 characters');

  const nameSchema = Yup.string()
    .required()
    .min(2);

  const handleChange = ev => {
    const { name, value, checked, type } = ev.target;
    const data = type === "checkbox" ? checked : value;

    setForm({
      ...form,
      [name]: data
    });

    if(name === "name") {
      nameSchema.validate(data)
      .then(() => {
        setNameError('');
      })
      .catch(() => {
        setNameError('name must be at least 2 characters');
      });
    }
  }

  return (<>
    <form id="pizza-form">
      <label>
        Your name:
        <input name="name" value={form.name} type="text" id="name-input" onChange={handleChange} />
      </label>
      <label>
        Select pizza size:
        <select name="pizzaSize" value={form.pizzaSize} id="size-dropdown" onChange={handleChange}>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
          <option value="XL">Extra large</option>
        </select>
      </label>
      <label>
        Pepperoni?:
        <input name="pepperoni" type="checkbox" checked={form.pepperoni} onChange={handleChange}/>
      </label>
      <label>
        Peppers?:
        <input name="peppers" type="checkbox" checked={form.peppers} onChange={handleChange}/>
      </label>
      <label>
        Spinach?:
        <input name="spinach" type="checkbox" checked={form.spinach} onChange={handleChange}/>
      </label>
      <label>
        Anchovies?:
        <input name="anchovies" type="checkbox" checked={form.anchovies} onChange={handleChange}/>
      </label>
      <label>
        Special instructions:
        <input name="specialInstructions" value={form.specialInstructions} type="text" id="special-text" onChange={handleChange}/>
      </label>
    </form>
    <p style={ {color: 'maroon'} }>{nameError}</p>
  </>);
}

export default PizzaOrder;