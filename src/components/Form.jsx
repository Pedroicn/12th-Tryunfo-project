import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardRace,
      cardClass,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardAttr4,
      cardAttr5,
      cardAttr6,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,

    } = this.props;

    function verificaTrunfo() {
      return !hasTrunfo ? (
        <input
          checked={ cardTrunfo }
          onChange={ onInputChange }
          data-testid="trunfo-input"
          type="checkbox"
          name="checkTrunfo"
          id="checkTrunfo"
        />
      ) : <p>Você já tem um Super Trunfo em seu baralho</p>;
    }

    return (
      <form id="form">
        <h2>Crie seu personagem</h2>
        <div className="char" id="nome">
          <p>Nome:</p>
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
        </div>
        <div className="char" id="cardRace">
          <p>Raça:</p>
          <label htmlFor="cardRace">

            <input
              value={ cardRace }
              onChange={ onInputChange }
              name="cardRace"
              id="cardRace"
              type="text"
            />
          </label>
        </div>
        <div className="char" id="cardClass">
          <p>Classe:</p>
          <label htmlFor="cardClass">

            <input
              value={ cardClass }
              onChange={ onInputChange }
              name="cardClass"
              id="cardClass"
              type="text"
            />
          </label>
        </div>

        <div className="atributos">
          <p>Força</p>
          <label htmlFor="attr1">
            <input
              value={ cardAttr1 }
              onChange={ onInputChange }
              name="attr1"
              id="attr1"
              data-testid="attr1-input"
              type="number"
              // min={ 0 }
              // max={ 90 }
            />
          </label>
        </div>
        <div className="atributos">
          <p>Destreza:</p>
          <label htmlFor="attr2">
            <input
              value={ cardAttr2 }
              onChange={ onInputChange }
              name="attr2"
              id="attr2"
              data-testid="attr2-input"
              type="number"
              // min={ 0 }
              // max={ 90 }
            />
          </label>
        </div>
        <div className="atributos">
          <p>Constituição:</p>
          <label htmlFor="attr3">
            <input
              value={ cardAttr3 }
              onChange={ onInputChange }
              name="attr3"
              id="attr3"
              data-testid="attr3-input"
              type="number"
              // min={ 0 }
              // max={ 90 }
            />
          </label>
        </div>
        <div className="atributos">
          <p>Sabedoria</p>
          <label htmlFor="attr4">
            <input
              value={ cardAttr4 }
              onChange={ onInputChange }
              name="attr4"
              id="attr4"
              type="number"
            />
          </label>
        </div>
        <div className="atributos">
          <p>Inteligência:</p>
          <label htmlFor="attr5">
            <input
              value={ cardAttr5 }
              onChange={ onInputChange }
              name="attr5"
              id="attr5"
              type="number"
            />
          </label>
        </div>
        <div className="atributos">
          <p>Carisma:</p>
          <label htmlFor="attr6">
            <input
              value={ cardAttr6 }
              onChange={ onInputChange }
              name="attr6"
              id="attr6"
              type="number"
            />
          </label>
        </div>
        <div className="other-informations">
          <p>Url da imagem</p>
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
        </div>
        <div className="other-informations">
          <p>Raridade</p>
          <label htmlFor="rarity">
            <select
              value={ cardRare }
              onChange={ onInputChange }
              data-testid="rare-input"
              name="rarity"
              id="rarity"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </div>
        <div className="other-informations">
          <p>Super Trunfo:</p>
          <label htmlFor="checkTrunfo">
            { verificaTrunfo() }
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
  cardRace: PropTypes.string.isRequired,
  cardClass: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardAttr4: PropTypes.string.isRequired,
  cardAttr5: PropTypes.string.isRequired,
  cardAttr6: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
