import Banner from "./banner";
import BannerParameters from "./banner-parameters";
import SearchBar from "./searchBar";
import Pricing from "./pricing";

function main() {
  return (
    <div className="banner-container">
      <Banner />
      <BannerParameters />
      <SearchBar />
      <Pricing />
    </div>
  );
}

export default main;
