import "./Header.css";
import { Squash as Hamburger } from "hamburger-react";
import Menus from "./HeaderMenu";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const closedMenu = () => {
    setMenuOpened(false);
  };

  return (
    <section className="section_header app ">
      <header className="header">
        <div className="menus ">
          <div className="logo">
            <h1>
              <Link to="/" className="zlaam">
                <img src="/siraj.png" alt="zlaam" />
              </Link>
            </h1>
          </div>
          <Menus closedMenu={closedMenu} isOpen={menuOpened} />
        </div>
        <div className="menu_icon" onClick={() => setMenuOpened(!menuOpened)}>
          <Hamburger
            toggled={menuOpened}
            toggle={setMenuOpened}
            size={30}
            color="#000"
            duration={1}
            distance="sm"
            rounded
            hideOutline={false}
          />
        </div>
      </header>
    </section>
  );
};

export default Header;
