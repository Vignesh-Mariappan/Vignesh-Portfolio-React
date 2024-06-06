import vignesh from "../assets/images/vignesh.jpeg";
import { AppContext } from "../App";
import { useContext } from "react";

const Header = () => {
  const { mode } = useContext(AppContext);

  return (
    <header>
      {/* <img src={vignesh} alt="Vignesh M" id="profile-pic" /> */}
      <div className="title">
        <h1
          style={{
            color: mode === "dark" ? "#181818" : "white",
          }}
        >
          VIGNESH M
        </h1>
        <h1
          style={{
            color: mode === "dark" ? "#181818" : "white",
          }}
        >
          Front End Developer
        </h1>
      </div>
    </header>
  );
};

export default Header;
