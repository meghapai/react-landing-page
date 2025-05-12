import "./Hero.css";
import { FcNext } from "react-icons/fc";

function Hero() {
  return (
    <>
      <main className="hero-section main">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <h1 className="heading-xl"> Lorem ipsum </h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              laudantium? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Tenetur, consequuntur?Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Id, omnis.
            </p>
            <button className="btn-hero">
              Know More <FcNext />
            </button>
          </div>
          <div className="hero-image">
            <img
              src="/images/heroImg.svg"
              alt="hero image"
              className="banner-image"
              width={"300px"}
              height={"300px"}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
