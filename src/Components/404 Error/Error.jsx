import {} from "react";
import "./Error.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const ErrorPage = () => {
  return (
    <>
      <div className="mainError">
        <div className="errorText">
          <h1 className="txt1">Error</h1>
          <h1 className="txt2">404</h1>
          <p className="txt3 flex justify-center items-center gap-4">
            <BsArrowRight />
            <Link to="/" className="hometxt">
              Home
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
