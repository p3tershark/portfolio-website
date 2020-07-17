import React from "react";

const Home = () => {
  let ImgPath =
    "https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  return (
    <div className="container user-select-none">
      <img src={ImgPath} alt="bg" className="bg" />

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
              the{" "}
              <a className="text-danger" href="/about">
                About
              </a>{" "}
              menu.
            </p>
            <p>
              In the{" "}
              <a className="text-danger" href="/tools">
                Tools
              </a>{" "}
              menu you can try web aplications I built using ReactJS.
            </p>
            <p>
              The{" "}
              <a className="text-danger" href="/channel">
                Channel
              </a>{" "}
              menu is about my Youtube channel, please check that too.
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
