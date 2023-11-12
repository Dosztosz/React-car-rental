import React from "react";
import Popup from "reactjs-popup";

export default (props) => (
  <Popup
    trigger={<button className="button rent"> Read More </button>}
    modal
    nested
  >
    {(close) => (
      <div className="background-modal">
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="img">
            <img alt={props.name} src={props.img} />
          </div>
          <div className="header"> {props.name} </div>
          <div className="car-details">
            <ul>
              <li>Kraków</li>
              <li>Poland</li>
              <li>id: 8332</li>
              <li>Type: Nugget</li>
              <li>Fuel Consumption: 5,5 L/100km</li>
              <li>Horse Power: 60 hp</li>
            </ul>
          </div>
          <div className="title">
            <h3>About Car</h3>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
              nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
              quibusdam voluptates delectus doloremque, explicabo tempore dicta
              adipisci fugit amet dignissimos?
            </span>
          </div>

          <div className="functions">
            <h3>Functions</h3>
            <span>
              Apple CarPlay and Android Auto integration Smart Key with Push
              Button Start Automatic climate control Front-Wheel Drive
              Electronic Stability Control Rearview camera
            </span>
          </div>
          <div className="rental-info">
            <h3>Rental Conditions</h3>
            <ul>
              <li>Minimum age: 21</li>
              <li>Valid driver's license</li>
              <li>Price: 20$/per day</li>
            </ul>
          </div>
          <div className="actions">
            <Popup
              trigger={<button className="rent"> Rent </button>}
              position="top center"
              nested
            >
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                magni omnis delectus nemo, maxime molestiae dolorem numquam
                mollitia, voluptate ea, accusamus excepturi deleniti ratione
                sapiente! Laudantium, aperiam doloribus. Odit, aut.
              </span>
            </Popup>
            <button
              className="cancel"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )}
  </Popup>
);
