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
      attr1: '',
      attr2: '',
      attr3: '',
      imageInput: '',
      rarity: '',
      checkTrunfo: false,
      isDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      const { cardName, description, imageInput, rarity } = this.state;
      const buttonIsDisabled = cardName.length === 0
        || description.length === 0
        || imageInput.length === 0
        || rarity.length === 0;
      this.setState({ isDisabled: buttonIsDisabled });
    });
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
      </div>
    );
  }
}

export default App;
