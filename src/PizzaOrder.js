import React from 'react';

const PizzaOrder = function () {
  return (<>
    <form id="pizza-form">
      <label>
        Your name:
        <input name="name" type="text" id="name-input" />
      </label>
      <label>
        Select pizza size:
        <select name="pizzaSize" id="size-dropdown">
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
          <option value="XL">Extra large</option>
        </select>
      </label>
      <label>
        Pepperoni?:
        <input name="pepperoni?" type="checkbox" />
      </label>
      <label>
        Peppers?:
        <input name="peppers?" type="checkbox" />
      </label>
      <label>
        Spinach?:
        <input name="spinach?" type="checkbox" />
      </label>
      <label>
        Anchovies?:
        <input name="anchovies?" type="checkbox" />
      </label>
      <label>
        Special instructions:
        <input name="specialInstructions" type="text" id="special-text" />
      </label>
    </form>
  </>);
}

export default PizzaOrder;