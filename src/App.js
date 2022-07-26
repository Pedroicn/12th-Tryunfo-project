import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      description: '',
      attr1: '',
      attr2: '',
      attr3: '',
      imageInput: '',
      rarity: '',
      checkTrunfo: false,
      isDisabled: true,
      hasTrunfo: false,
      totalCards: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const {
      cardName,
      description,
      attr1,
      attr2,
      attr3,
      imageInput,
      rarity,
      checkTrunfo,
    } = this.state;

    const newCard = {
      cardName,
      description,
      attr1,
      attr2,
      attr3,
      imageInput,
      rarity,
      hasTrunfo: checkTrunfo,
    };
    this.setState((prevState) => ({
      cardName: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
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
      const {
        cardName,
        description,
        imageInput,
        rarity,
        attr1,
        attr2,
        attr3,
      } = this.state;
      const maxNumber = 90;
      const minNumber = 0;
      const limitNumber = 210;
      const isDisabledOne = cardName.length === 0
        || description.length === 0
        || imageInput.length === 0
        || rarity.length === 0;
      const isDisabledTwo = ((attr1 > maxNumber || attr1 < minNumber) || attr1 === '')
        || ((attr2 > maxNumber || attr2 < minNumber) || attr2 === '')
        || ((attr3 > maxNumber || attr3 < minNumber) || attr3 === '');
      const isDisabledThree = ((Number(attr1)
        + Number(attr2)
        + Number(attr3))
        > limitNumber);
      const buttonIsDisabled = isDisabledOne || isDisabledTwo || isDisabledThree;
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

  render() {
    const {
      cardName,
      description,
      attr1,
      attr2,
      attr3,
      imageInput,
      rarity,
      checkTrunfo,
      isDisabled,
      hasTrunfo,
      totalCards,
    } = this.state;
    return (
      <div id="main">
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
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
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ imageInput }
          cardRare={ rarity }
          cardTrunfo={ checkTrunfo }
        />
        <h2>Minhas Cartas</h2>
        {totalCards.map((card) => (
          <section key={ card.cardName }>
            <Card
              cardName={ card.cardName }
              cardDescription={ card.description }
              cardAttr1={ card.attr1 }
              cardAttr2={ card.attr2 }
              cardAttr3={ card.attr3 }
              cardImage={ card.imageInput }
              cardRare={ card.rarity }
              cardTrunfo={ card.hasTrunfo }
            />
            <button
              data-testid="delete-button"
              onClick={ () => this.removeCard(card.cardName) }
              type="button"
            >
              Excluir
            </button>
          </section>
        ))}
      </div>
    );
  }
}

export default App;
