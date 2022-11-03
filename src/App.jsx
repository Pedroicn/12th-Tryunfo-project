import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './global.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      description: '',
      cardRace: '',
      cardClass: '',
      attr1: '',
      attr2: '',
      attr3: '',
      attr4: '',
      attr5: '',
      attr6: '',
      imageInput: '',
      rarity: '',
      checkTrunfo: false,
      isDisabled: true,
      hasTrunfo: false,
      totalCards: [],
      filter: '',
      rarityFilter: 'todas',
      trunfoFilter: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const {
      cardName,
      description,
      cardRace,
      cardClass,
      attr1,
      attr2,
      attr3,
      attr4,
      attr5,
      attr6,
      imageInput,
      rarity,
      checkTrunfo,
    } = this.state;

    const newCard = {
      cardName,
      description,
      cardRace,
      cardClass,
      attr1,
      attr2,
      attr3,
      attr4,
      attr5,
      attr6,
      imageInput,
      rarity,
      hasTrunfo: checkTrunfo,
    };
    this.setState((prevState) => ({
      cardName: '',
      description: '',
      cardRace: '',
      cardClass: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      attr4: '0',
      attr5: '0',
      attr6: '0',
      imageInput: '',
      rarity: 'normal',
      checkTrunfo: false,
      isDisabled: true,
      hasTrunfo: prevState.hasTrunfo === true ? true : checkTrunfo,
      totalCards: [...prevState.totalCards, newCard],
    }));
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      const buttonIsDisabled = this.firstValidation()
        || this.secondValidation() || this.thirdVlidation();
      this.setState({ isDisabled: buttonIsDisabled });
    });
  }

  removeCard = (cardName) => {
    const { totalCards } = this.state;
    const filteredCards = totalCards.filter((card) => cardName !== card.cardName);
    this.setState({
      totalCards: filteredCards,
    });
    const trunfoCard = totalCards.find((card) => card.cardName);
    const { hasTrunfo } = trunfoCard;
    if (hasTrunfo) this.setState({ hasTrunfo: false });
  }

  setFilterValue = ({ target: { value, name, type, checked } }) => {
    const value2 = (type === 'checkbox') ? checked : value;
    this.setState({
      [name]: value2,
    });
  }

  firstValidation = () => {
    const {
      cardName,
      cardRace,
      cardClass,
      imageInput,
      rarity,
    } = this.state;
    const isDisabledOne = cardName.length === 0
    || cardRace.length === 0
    || cardClass.length === 0
    || imageInput.length === 0
    || rarity.length === 0;
    return isDisabledOne;
  }

  secondValidation = () => {
    const {
      attr1,
      attr2,
      attr3,
      attr4,
      attr5,
      attr6,
    } = this.state;
    const maxNumber = 90;
    const minNumber = 0;
    const arrayAttr = [attr1, attr2, attr3, attr4, attr5, attr6];
    const validation = arrayAttr
      .some((attr) => (attr > maxNumber || attr < minNumber) || attr === '');
    return validation;
  }

  thirdVlidation = () => {
    const limitNumber = 420;
    const {
      attr1,
      attr2,
      attr3,
      attr4,
      attr5,
      attr6,
    } = this.state;
    const isDisabledThree = ((Number(attr1)
        + Number(attr2)
        + Number(attr3)
        + Number(attr4)
        + Number(attr5)
        + Number(attr6))
        > limitNumber);
    return isDisabledThree;
  }

  render() {
    const {
      cardName,
      description,
      cardRace,
      cardClass,
      attr1,
      attr2,
      attr3,
      attr4,
      attr5,
      attr6,
      imageInput,
      rarity,
      checkTrunfo,
      isDisabled,
      hasTrunfo,
      totalCards,
      filter,
      rarityFilter,
      trunfoFilter,
    } = this.state;

    const filteredCards = totalCards.filter((element) => {
      if (trunfoFilter === true) {
        return element.hasTrunfo === true;
      }
      const card = element.cardName;
      return card.includes(filter);
    }).filter((element) => {
      const card = element.cardName;
      const rarityCard = element.rarity;

      if (rarityFilter === 'todas') {
        return card.includes(filter);
      }
      return rarityCard === rarityFilter;
    });

    return (
      <div id="main">
        <div id="home">
          <div>
            <h1>Dungeons & Dragons - Super Trunfo</h1>
          </div>
          <div id="createCard">
            <Form
              onInputChange={ this.onInputChange }
              cardName={ cardName }
              cardDescription={ description }
              cardRace={ cardRace }
              cardClass={ cardClass }
              cardAttr1={ attr1 }
              cardAttr2={ attr2 }
              cardAttr3={ attr3 }
              cardAttr4={ attr4 }
              cardAttr5={ attr5 }
              cardAttr6={ attr6 }
              cardImage={ imageInput }
              cardRare={ rarity }
              cardTrunfo={ checkTrunfo }
              isSaveButtonDisabled={ isDisabled }
              onSaveButtonClick={ this.onSaveButtonClick }
              hasTrunfo={ hasTrunfo }
            />
            <Card
              cardName={ cardName }
              cardDescription={ description }
              cardRace={ cardRace }
              cardClass={ cardClass }
              cardAttr1={ attr1 }
              cardAttr2={ attr2 }
              cardAttr3={ attr3 }
              cardAttr4={ attr4 }
              cardAttr5={ attr5 }
              cardAttr6={ attr6 }
              cardImage={ imageInput }
              cardRare={ rarity }
              cardTrunfo={ checkTrunfo }
            />
          </div>
        </div>

        <div id="saved-cards">
          <h1>Minhas Cartas</h1>
          <h3>Filtros de busca</h3>
          <div id="filtros">
            <label htmlFor="cardFilter">
              <p>Busca por nome:</p>
              <input
                name="filter"
                onChange={ this.setFilterValue }
                data-testid="name-filter"
                id="cardFilter"
                type="text"
                disabled={ trunfoFilter }
              />
            </label>
            <label htmlFor="rareFilter">
              <p>Busca por raridade:</p>
              <select
                name="rarityFilter"
                id="rareFilter"
                onChange={ this.setFilterValue }
                data-testid="rare-filter"
                disabled={ trunfoFilter }
              >
                <option value="todas">todas</option>
                <option value="normal">normal</option>
                <option value="raro">raro</option>
                <option value="muito raro">muito raro</option>
              </select>
            </label>
            <label htmlFor="filterTrunfo">
              <p>Super Trunfo:</p>
              <input
                onChange={ this.setFilterValue }
                name="trunfoFilter"
                id="filterTrunfo"
                data-testid="trunfo-filter"
                type="checkbox"
              />
            </label>
          </div>
          <div id="myCards">
            {filteredCards.map((card) => (
              <>
                <Card
                  cardName={ card.cardName }
                  cardDescription={ card.description }
                  cardRace={ card.cardRace }
                  cardClass={ card.cardClass }
                  cardAttr1={ card.attr1 }
                  cardAttr2={ card.attr2 }
                  cardAttr3={ card.attr3 }
                  cardAttr4={ card.attr4 }
                  cardAttr5={ card.attr5 }
                  cardAttr6={ card.attr6 }
                  cardImage={ card.imageInput }
                  cardRare={ card.rarity }
                  cardTrunfo={ card.hasTrunfo }
                />
                <div>
                  <button
                    data-testid="delete-button"
                    onClick={ () => this.removeCard(card.cardName) }
                    type="button"
                  >
                    Excluir
                  </button>
                </div>

              </>
            ))}
          </div>

        </div>

      </div>
    );
  }
}

export default App;
