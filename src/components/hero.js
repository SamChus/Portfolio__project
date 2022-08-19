import twitter from "../images/twitter.svg";
import insta from "../images/insta.svg";
import samuel from "../images/samuel.JPG";


const Hero = () => {
  return (
    <div className="grid grid--1x2 hero">
      <div className="hero__des block__header">
        <p className="hero__text-one">HELLO</p>
        <h3 className="hero__text-two">I'M CHUKWUMA CHIGOZIE SAMUEL (CCS)</h3>
        <h1 className="hero__text-three">A Front-end Developer</h1>
        <div className="target__links">
        <a href="/" target={"_blank"}>
          <img src={twitter} alt="twitter" />
        </a>
        <a href="/" target={"_blank"}>
          <img src={insta} alt="insta" />
        </a>
       </div>
      </div>
        <img className="hero__image" src={samuel} alt="" />
    </div>
  );
};

export default Hero;
