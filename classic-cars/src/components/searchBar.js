import twingoPhoto from "../img/cars/twingo.jpg";
import micraPhoto from "../img/cars/micra.webp";
import yarisPhoto from "../img/cars/yaris.webp";
import trevisPhoto from "../img/cars/trevis.jpg";

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
      <img src={c.carImgUrl} />
      <div className="car-description">
        <p className="bolder enlarge">Name: {c.carName}</p>
        <p>Power: {c.carHp}</p>
        <p>Price per day: {c.carPrice}</p>
        <button id={c.id}>Rent</button>
      </div>
    </div>
  ));

  return (
    <div className="search-container">
      <div className="filter-container">
        <h1>Choose you dream Car</h1>
        <div className="filters"></div>
      </div>
      <div className="car-list">{listCars}</div>
    </div>
  );
}

export default searchBar;
