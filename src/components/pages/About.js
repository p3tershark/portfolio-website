import React from "react";
import profileImg from "../images/profileimg.jpg";
import aboutBackground from "../images/about_background.jpeg";

const About = () => {
  return (
    <div className="container user-select-none">
      <img src={aboutBackground} alt="background" className="bg" />
      <div className="container about intro m-2 p-3">
        <img src={profileImg} alt="profile" className="profileimg" />
        <div>
          <h2>Greetings Dear Visitor!</h2>
          <br />
          <p>
            I was born in Hungary in 1978. At the moment I am working as a
            delivery driver in England where I've been living for 12 years, and
            I hope I can change my career soon and start a new adventure in web-
            or software development.
          </p>
          <p>
            In the past I have done different job roles at various companies.
          </p>
          <p>
            I worked as Ambulance car driver in the Hungarian Army; I was Sales
            Manager at a computer shop; I worked as security guard and armed van
            driver; I was team leader in a food factory and a few other minor
            job roles.
          </p>
          <p>
            With me a supporting team player joins your group who is able to
            work as a part of your team or on his own. I do my best in every job
            role because I think there are no small tasks, only important ones.
          </p>
          <p>
            I was always - and I still am - interested in technology, and I
            really like to see the fruit of my labour on the screen. I have done
            several online courses, and I built this website based on the
            knowledge I gained from them. I'm looking for the right place to
            plant these skills into practice and gain more knowledge and
            experience.
          </p>
          <p>
            Contact me, and have a chat about what values I can add to your
            company and how we can build our mutual future!
          </p>
          <p>Thank You!</p>

          <p>
            p<strong className="text-danger">3</strong>tershark
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
