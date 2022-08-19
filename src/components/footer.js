import twitter from "../images/twitter-brands.svg";
import insta from "../images/linkedin-in-brands.svg";
import git from "../images/github-brands.svg";

const Footer = () => {
  return (
    <footer className="block block--dark footer">
      <div className="footer__name">CCS.</div>
      <div className="target__links">
        <a href="/" target={"_blank"} >
          <img src={twitter} alt="twitter" className="icon__container"/>
        </a>
        <a href="/" target={"_blank"}>
          <img src={insta} alt="insta" className="icon__container"/>
        </a>
        <a href="/" target={"_blank"}>
          <img src={git} alt="insta" className="icon__container"/>
        </a>
      </div>
      <p className="footer__copy">Copyright  2021 Samuel | All rights Reserved</p>
    </footer>
  );
};

export default Footer;
