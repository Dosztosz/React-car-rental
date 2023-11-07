import twingo from "../img/twingo.webp";

function Banner() {
  return (
    <div className="banner padding-50">
      <div className="banner-description">
        <h1>Rent your dream Car</h1>
        <p className="enlarge">Make your roof go unfold</p>
        <button>Check it out!</button>
      </div>
      <div className="banner-photo">
        <img src={twingo} />
      </div>
    </div>
  );
}
export default Banner;
