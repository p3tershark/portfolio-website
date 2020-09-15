import React from "react";
import ReactPlayer from "react-player";
import channelBackground from "../images/channel_background.jpeg";

const Videos = () => {
  return (
    <div className="text-center m-auto">
      <img src={channelBackground} alt="bg" className="bg" />
      <div className="p-5">
        <h1 className="greeting p-3">Videos</h1>
      </div>

      <div className="d-flex">
        <div className="container p-3 m-2">
          <h5 className="greeting p-3">The best comedian</h5>
          <div>
            <ReactPlayer
              url={[
                "https://youtu.be/MjXChWKKQUw",
                "https://youtu.be/ccnwzScp6bM",
                "https://youtu.be/tYEoap0-Jzk",
                "https://youtu.be/Tu_m5diSk4k",
              ]}
              width="100%"
            />
          </div>
        </div>

        <div className="container p-3 m-2">
          <h5 className="greeting p-3">
            My first playlist about my new lifestyle
          </h5>
          <div>
            <ReactPlayer
              url={[
                "https://youtu.be/rXFkJ39bFeg",
                "https://youtu.be/cYrXQJoFrcM",
                "https://youtu.be/U2MMvNHafho",
                "https://youtu.be/7UKwC7sjXIY",
                "https://youtu.be/6_gF7CU946Q",
              ]}
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
