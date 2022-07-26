import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <form>
        <h1>Adicionar nova carta</h1>
        <div>
          <label htmlFor="cardName">
            <input
              value={ cardName }
              onChange={ onInputChange }
              name="cardName"
              id="cardName"
              data-testid="name-input"
              type="text"
            />
          </label>
          <label htmlFor="description">
            <textarea
              value={ cardDescription }
              onChange={ onInputChange }
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
            <input
              value={ cardAttr1 }
              onChange={ onInputChange }
              name="attr1"
              id="attr1"
              data-testid="attr1-input"
              type="number"
              min={ 0 } 
              max={ 90 }
            />
          </label>
          <label htmlFor="attr2">
            <input
              value={ cardAttr2 }
              onChange={ onInputChange }
              name="attr2"
              id="attr2"
              data-testid="attr2-input"
              type="number"
              min={ 0 }
              max={ 90 }
            />
          </label>
          <label htmlFor="attr3">
            <input
              value={ cardAttr3 }
              onChange={ onInputChange }
              name="attr3"
              id="attr3"
              data-testid="attr3-input"
              type="number"
              min={ 0 }
              max={ 90 }
            />
          </label>
        </div>
        <div>
          <label htmlFor="imageInput">
            <input
              name="imageInput"
              value={ cardImage }
              onChange={ onInputChange }
              id="imageInput"
              data-testid="image-input"
              type="text"
            />
          </label>
          <label htmlFor="rarity">
            <select
              value={ cardRare }
              onChange={ onInputChange }
              data-testid="rare-input"
              name="rarity"
              id="rarity"
            >
              <option value="">Selecione o tipo</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="checkTrunfo">
            <input
              checked={ cardTrunfo }
              onChange={ onInputChange }
              data-testid="trunfo-input"
              type="checkbox"
              name="checkTrunfo"
              id="checkTrunfo"
            />
          </label>

        </div>

        <button
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
          data-testid="save-button"
          type="button"
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func,
};

export default Form;
