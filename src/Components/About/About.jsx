import "./About.css";
import { Link } from "react-router-dom";
import { BsArrowDown } from "react-icons/bs";
import Data from "../../aboutdata.json";
const About = () => {
  const { title, image, content } = Data;
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  return (
    <>
      <section className="about">
        <div>
          <div className="resume">
            <div className="downarrow">
              <BsArrowDown size={20} />
            </div>
            <Link className="resume_btn">Resume</Link>
          </div>
          <div className="main_about">
            <div className="info_about">
              <h1>Who am i?</h1>
              <p>
                <h4>
                  <strong>Hello there!</strong>
                </h4>
                I am known as Zlaam. I am a dedicated and skilled FullStack-web
                App developer with a 1.5 Years of hands-on experience. My true
                passion lies in transforming concepts into tangible digital
                solutions, and I wholeheartedly embrace new challenges that come
                my way. I am proficient in languages such as JavaScript and
                Python, I specialize in creating dynamic and responsive web
                applications. My goal is to continue pushing the boundaries of
                innovation in the ever-evolving field of web development.{date}
              </p>
              <div className="current_time_main_container">
                <div className="date_container">
                  <span className="date">{date}-</span>
                  <span className="month">{month}-</span>
                  <span className="year">{year}</span>
                </div>
                <span className="avail_msg">Available For Work</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            python
            <img src={image} alt="" />
            <div className="card__content">
              <p className="card__title">Card Title</p>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
