import {} from "react";
import "./Home.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="section_home ">
        <div className="home ">
          <div className="left_txt ">
            <h1 className="intro">
              Hy, I am Zlaam
              <br />
              <span className="normal"> I am UX/UI designer</span>&nbsp;
              <span className="and">&</span>&nbsp;
              <span className="normal"> FullStack-web and App developer </span>
            </h1>
          </div>
          <div className=" right_txt">
            <Link to="./Contact">
              <BsArrowRight size={25} />
              <span className="info-text selection:bg-transparent cursor-pointer">
                Hire me Now
              </span>
            </Link>
            <Link to="./About" className="abouts">
              <BsArrowRight size={25} />
              <span className="info-text cursor-pointer selection:bg-transparent">
                Know more About me
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
