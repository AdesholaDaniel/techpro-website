import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import './Servicesfill.css';

function Cards() {
  return (
    <div className="cards">
      <h1>These are our wide range of services</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/webdev.jfif"
              text="Web development and design"
              label="Web design"
              path="/blog"
            />
            <CardItem
              src="images/graphicsdesign.jfif"
              text="Graphics and motion graphics"
              label="web design"
              path="/blog"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/uiuxdesign.png"
              text="UI/UX design and product management"
              label="UI/UX"
              path="/blog"
            />
            <CardItem
              src="images/appdev.jpg"
              text="Mobile App development"
              label="Web design"
              path="/blog"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
