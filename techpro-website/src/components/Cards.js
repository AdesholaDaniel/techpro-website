import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards">
      <h1>CHECK OUR PROJECTS</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/portfolio2.png"
              text="A responsive portfolio wesbsite created using HTML, CSS AND VANILLA.JS"
              label="Web design"
              path="/"
            />
            <CardItem
              src="images/portfolio.png"
              text="A complete chat app using React.Js and ChatEngine.io"
              label="web design"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/portfolio3.png"
              text="A view of a mobile web app created usign Figma"
              label="UI/UX"
              path="/"
            />
            <CardItem
              src="images/img-4.jpg"
              text="A Crypto web3.0 website created using React.js and built on the Ethereum Network"
              label="Web design"
              path="/"
            />
            <CardItem
              src="images/img-8.jpg"
              text="A food app built using Vanilla.js to fetch food details from and a restful API"
              label="Webs design"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
