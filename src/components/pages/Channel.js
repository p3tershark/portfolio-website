import React from "react";
import ReactPlayer from "react-player";

const Channel = () => {
  let ImgPath =
    "https://images.pexels.com/photos/275226/pexels-photo-275226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  return (
    <div>
      <img src={ImgPath} alt="bg" className="bg" />
      <div className="d-flex align-items-center flex-column">
        <div className="p-5">
          <h1 className="text-center greeting p-3">My Channel</h1>
        </div>
        <div className="container p-3">
          <h5 className="text-left greeting p-3 float-left">
            My first playlist (presentations) about my new lifestyle
          </h5>
          <ReactPlayer
            url={[
              "https://youtu.be/rXFkJ39bFeg",
              "https://youtu.be/cYrXQJoFrcM",
              "https://youtu.be/U2MMvNHafho",
              "https://youtu.be/7UKwC7sjXIY",
              "https://youtu.be/6_gF7CU946Q",
            ]}
            width="520px"
          />
        </div>
      </div>
    </div>
  );
};

export default Channel;
