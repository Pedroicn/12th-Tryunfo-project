import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <h1>Adicionar nova carta</h1>
        <div>
          <label htmlFor="card-name">
            <input name="card-name" id="card-name" data-testid="name-input" type="text" />
          </label>
          <label htmlFor="description">
            <textarea
              data-testid="description-input"
              name="description"
              id="description"
              cols="30"
              rows="10"
            />
          </label>
        </div>

        <div>
          <label htmlFor="attr1">
            <input name="attr1" id="attr1" data-testid="attr1-input" type="number" />
          </label>
          <label htmlFor="attr2">
            <input name="attr2" id="attr2" data-testid="attr2-input" type="number" />
          </label>
          <label htmlFor="attr3">
            <input name="attr3" id="attr3" data-testid="attr3-input" type="number" />
          </label>
        </div>
        <div>
          <label htmlFor="image-input">
            <input id="image-input" data-testid="image-input" type="text" />
          </label>
          <label htmlFor="rarity">
            <select data-testid="rare-input" name="rarity" id="rarity">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="check-trunfo">
            <input
              data-testid="trunfo-input"
              type="checkbox"
              name="check-trunfo"
              id="check-trunfo"
            />
          </label>

        </div>

        <button data-testid="save-button" type="button">Salvar</button>
      </form>
    );
  }
}

export default Form;
