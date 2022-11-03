import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
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
    } = this.props;

    function addTrunfo() {
      if (cardTrunfo === true) {
        return <h4 id="trunfo" data-testid="trunfo-card">Super Trunfo</h4>;
      }
    }

    return (
      <section
        id="newCard"
      >
        <div
          id="img-newcard"
          style={ {
            backgroundImage: `url("${cardImage}")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          } }
        />
        <div id="new-card-char">
          <div className="new-card-atributes">
            <p data-testid="name-card">Nome: </p>
            <p className="attr-check">{cardName}</p>
          </div>
          <div className="new-card-atributes">
            <p data-testid="name-card">Raça: </p>
            <p className="attr-check">{cardRace}</p>
          </div>
          <div className="new-card-atributes">
            <p data-testid="name-card">Classe: </p>
            <p className="attr-check">{cardClass}</p>
          </div>

          <div className="new-card-atributes">
            <p data-testid="name-card">Força: </p>
            <p className="attr-check">{cardAttr1}</p>
          </div>
          <div className="new-card-atributes">
            <p data-testid="name-card">Destreza: </p>
            <p className="attr-check">{cardAttr2}</p>
          </div>
          <div className="new-card-atributes">
            <p data-testid="name-card">Constituição: </p>
            <p className="attr-check">{cardAttr3}</p>
          </div>
          <div className="new-card-atributes">
            <p data-testid="name-card">Sabedoria: </p>
            <p className="attr-check">{cardAttr4}</p>
          </div>

          <div className="new-card-atributes">
            <p data-testid="name-card">Inteligência: </p>
            <p className="attr-check">{cardAttr5}</p>
          </div>

          <div className="new-card-atributes">
            <p data-testid="name-card">Carisma: </p>
            <p className="attr-check">{cardAttr6}</p>
          </div>

          <h4 data-testid="rare-card">{cardRare}</h4>
          {addTrunfo()}
        </div>

      </section>
    );
  }
}

Card.propTypes = {
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
};

export default Card;
