import axios from 'axios';
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

  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const handleSubmit = ev => {
    ev.preventDefault();
    axios.post('https://reqres.in/api/orders', form)
      .then(resp => {
        console.log(resp);
        setFormSubmitted(true);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (<>
    <form id="pizza-form" onSubmit={handleSubmit}>
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
        <input data-cy="pepperoni" name="pepperoni" type="checkbox" checked={form.pepperoni} onChange={handleChange}/>
      </label>
      <label>
        Peppers?:
        <input data-cy="peppers" name="peppers" type="checkbox" checked={form.peppers} onChange={handleChange}/>
      </label>
      <label>
        Spinach?:
        <input data-cy="spinach" name="spinach" type="checkbox" checked={form.spinach} onChange={handleChange}/>
      </label>
      <label>
        Anchovies?:
        <input data-cy="anchovies" name="anchovies" type="checkbox" checked={form.anchovies} onChange={handleChange}/>
      </label>
      <label>
        Special instructions:
        <input name="specialInstructions" value={form.specialInstructions} type="text" id="special-text" onChange={handleChange}/>
      </label>
      <button id="order-button">Add to order</button>
    </form>
    <p style={ {color: 'orange'} }>{nameError}</p>
    <p style={ {color: 'green'} }>{ formSubmitted ? "Form submitted successfully!" : "" }</p>
  </>);
}

export default PizzaOrder;