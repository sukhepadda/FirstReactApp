import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

function Home() {
  return (
    <>
      {/* section 1 */}
      <div className="home" id="home">
        <main>
          <h1>PaddaTechStar</h1>
          <p>Solution to all your Problems</p>
        </main>
      </div>

      {/* section 2 */}
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving abiblity in children.
          </p>
        </div>
      </div>

      {/* section 3 */}
      <div className="home3" id="about">
        <div>
          <h1>Who are we?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            magni, eaque voluptate minus ipsam beatae optio obcaecati facilis
            aspernatur quae ducimus est corrupti veritatis atque, modi porro
            maiores quibusdam.
          </p>
        </div>
      </div>

      {/* section 4 */}
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{animationDelay: "0.3s"}}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{animationDelay: "0.5s"}}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{animationDelay: "0.7s"}}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{animationDelay: "0.9s"}}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
    // <></> this is fragments you can also use <fragments></fragments>
  );
}

export default Home;
