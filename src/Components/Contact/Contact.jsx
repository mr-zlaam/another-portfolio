/* eslint-disable react/no-unescaped-entities */
import "./Contact.css";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsGithub, BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <h1 className=" chat_text font-extrabold text-2xl text-center ">
        Let's have some chat
      </h1>
      <section className="contact">
        <div className="icons">
          <div className="icon_controller">
            <div className="facebook icon-child">
              <Link
                className="icon_customize"
                to="https://web.facebook.com/itszlaam"
                target="_blank"
              >
                <div className="o_icons">
                  <FaFacebookF size={40} className="color_icon" />
                </div>
                <span className=" icons_text">FaceBook</span>
              </Link>
            </div>
            <div className="github icon-child">
              <Link
                className="icon_customize"
                to="https://www.linkedin.com/in/%D9%85%D9%84%D9%83-%D8%A7%D9%84%D8%B8%D9%84%D8%A7%D9%85-696066266/"
                target="_blank"
              >
                <div className="o_icons">
                  <FaLinkedinIn size={40} className="color_icon" />
                </div>
                <span className=" icons_text">LinkedIn</span>
              </Link>
            </div>
            <div className="linkedin icon-child">
              <Link
                className="icon_customize"
                to="https://github.com/zalaam-0"
                target="_blank"
              >
                <div className="o_icons">
                  <BsGithub size={50} className="color_icon" />
                </div>
                <span className=" icons_text">GitHub</span>
              </Link>
            </div>
            <div className="Instagram icon-child">
              <Link
                className="icon_customize"
                to="https://www.instagram.com/its_zlaam/"
                target="_blank"
              >
                <div className="o_icons">
                  <BsInstagram size={50} className="color_icon" />
                </div>
                <span className=" icons_text">InstaGram</span>
              </Link>
            </div>
            <div className="mail icon-child">
              <Link
                className="icon_customize"
                to="mailto:mrzalaam@gmail.com"
                target="_blank"
              >
                <div className="o_icons">
                  <MdEmail size={50} className="color_icon" />
                </div>
                <span className=" icons_text">Email</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="image">
          <div className="transparent"></div>
          <img
            src="https://live.staticflickr.com/65535/53281434521_eeef635514_z.jpg"
            alt="Zlaam"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
