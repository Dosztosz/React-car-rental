import React, { useState } from "react";
import twingoPhoto from "../img/cars/twingo.jpg";
import micraPhoto from "../img/cars/micra.webp";
import yarisPhoto from "../img/cars/yaris.webp";
import trevisPhoto from "../img/cars/trevis.jpg";
import Popup from "./popup";

function searchBar() {
  const cars = [
    {
      id: 1,
      carName: "Renault Twingo",
      carHp: 65,
      carPrice: 60,
      carImgUrl: twingoPhoto,
    },
    {
      id: 2,
      carName: "Nissan Micra K11",
      carHp: 65,
      carPrice: 70,
      carImgUrl: micraPhoto,
    },
    {
      id: 3,
      carName: "Toyota Yaris",
      carHp: 65,
      carPrice: 65,
      carImgUrl: yarisPhoto,
    },
    {
      id: 4,
      carName: "Daihatsu Trevis",
      carHp: 65,
      carPrice: 45,
      carImgUrl: trevisPhoto,
    },
  ];

  const listCars = cars.map((c) => (
    <div className="car-info">
      <img alt={c.carName} src={c.carImgUrl} />
      <div className="car-description">
        <p className="bolder enlarge">{c.carName}</p>
        <p>
          Power: <b>{c.carHp} HP</b>
        </p>
        <p>
          Price per day: <b>{c.carPrice}</b> zł Netto
        </p>
        <Popup name={c.carName} img={c.carImgUrl} />
      </div>
    </div>
  ));

  return (
    <div className="search-container">
      <div className="filter-container">
        <h1>Search your best cars here</h1>
        <div className="filters">
          <form>
            <input type="text" placeholder="City"></input>
            <input type="date" placeholder="From Address"></input>
            <input type="date" placeholder="From Address"></input>
            <select name="cars" id="cars" form="carform">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <button className="button rent">Search</button>
          </form>
        </div>
      </div>
      <div className="car-list">{listCars}</div>
    </div>
  );
}

export default searchBar;
