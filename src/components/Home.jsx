import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechySumit</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            I am your one and only solution to the tech problems you face
            every day. I am leading tech company whose aim is to increase the
            problem solving ability.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who I am ?</h1>
          <p>
            Hi,I'm Sumit Yadav currently Pursuing Bachelor Of Technology -
            B.Tech, Computer Science And Engineering From Lovely Professional
            University. Enthusiastic Coder With Analytical Skills, Engineering,
            Leadership, Communication, And Presentation Skills. Fever To Know
            All The Latest Technologies And How It Works. And Changed The Way To
            Look The Things And Then Starts To Build My Strategy.
          </p>
          <p>
            Strong in design and integration with intuitive problem-solving
            skills. Proficient in JAVA, C#, PYTHON, JAVASCRIPT, and SQL.
            Passionate about implementing and launching new projects. Ability to
            translate business requirements into technical solutions. Looking to
            start the career as an entry-level software engineer with a reputed
            firm driven by technology.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
