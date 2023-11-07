import twingoInterior from "../img/twingo-interior.jpg";

function BannerParameters() {
  return (
    <div className="banner">
      <div className="banner-parameter-info">
        <h2>French Happy Face</h2>
        <div className="container">
          <div className="parameter">
            <span>1-100 km/h</span>
            <p className="enlarge bold">10,5 sec</p>
          </div>
          <div className="parameter">
            <span>Consumption</span>
            <p className="enlarge bold">5L / 100 km</p>
          </div>
        </div>
      </div>
      <div className="parameter-photos">
        <img src={twingoInterior} />
      </div>
    </div>
  );
}
export default BannerParameters;
