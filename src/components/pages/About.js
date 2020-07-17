import React from "react";
import profileImg from "../images/profileimg.jpg";

const About = () => {
  let ImgPath =
    "https://images.pexels.com/photos/1038935/pexels-photo-1038935.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  return (
    <div className="container user-select-none">
      <img src={ImgPath} alt="bg" className="bg" />
      <div className="row">
        <div className="col p-3 m-2 about portrait">
          <img className="img-fluid mx-auto" src={profileImg} alt="portrait" />
        </div>
        <div className="col p-3 m-2 about intro">
          <div>
            <h4>Greetings Dear Visitor!</h4>
            <p>
              I was born in Hungary, in 1978. At the moment I am working as a
              delivery driver in England where I'm living for 12 years, and I
              hope I can change my carrier soon and start a new adventure in
              web- or software development.
            </p>
            <p>
              In the past I done different job roles at different companies and
              businesses on a wide range.
            </p>
            <p>
              I worked as Ambulance car driver in the Hungarian Army, I was
              Sales Manager at a computer shop, I worked as security guard and
              armed van driver, I was team leader in a food factory and a few
              other minor job roles.
            </p>
            <p>
              With me a supporting team player joins to your group who is able
              to work as a part of your team or on his own, does his best in
              every job role because he thinks there are no small tasks, only
              important ones.
            </p>
            <p>
              I was always - and I still am - interested in technology, and I
              really like to see the fruit of my work on the screen. I have done
              some Udemy and Youtube courses, and I built this website based on
              the knowledge I gained from them. There is a lot to learn for me,
              I know it and I'm looking for a place where I can do so.
            </p>
            <p>
              Contact me, and have a chat about what values can I add to your
              company and how we can build our mutual future!
            </p>
            <p>Thank You for your attention!</p>

            <p>
              p<strong className="text-danger">3</strong>tershark
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
