import React from "react";
import homeBackground from "../images/home_background.jpeg";

const Home = () => {
  return (
    <div className="container user-select-none">
      <img src={homeBackground} alt="bg" className="bg" />

      <div className="d-flex align-items-center flex-column">
        <div className="p-5">
          <h1 className="text-center greeting p-3">
            Welcome at p<strong className="text-danger">3</strong>tershark.com
          </h1>
        </div>

        <div className="p-2">
          <h5 className="infobox p-4">
            <p>
              Hi, my name is P<strong className="text-danger">3</strong>ter
              Sarkozi and I built this website to show some of my skills in web
              development.
            </p>
            <p>
              Using the navbar, you can get some more information about me under
              the <strong className="text-danger">About</strong> menu.
            </p>
            <p>
              In the <strong className="text-danger">Tools</strong> menu you can
              try web aplications I built using ReactJS.
            </p>
            <p>
              The <strong className="text-danger">Videos</strong> menu is about
              some of my favourite videos and my Youtube channel, please check
              that too.
            </p>
            <p>Have a nice time on my site!</p>
            <p>Best wishes</p>
            <p>
              p<strong className="text-danger">3</strong>ter
            </p>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
