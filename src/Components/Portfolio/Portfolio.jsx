import Header from "../Header/Header.jsx";
import "./Portfolio.css";
import Routess from "../Routes/Routes";
const Portfolio = () => {
  return (
    <>
      <div className="portfolio app">
        <div className="header_toggle ">
          <Header />
        </div>
        <div className="home_main ">
          <Routess />
        </div>
      </div>
    </>
  );
};
export default Portfolio;
