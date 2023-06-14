import { useMediaQuery } from "react-responsive";
import "./footer.css";
import {
  FaFacebookSquare,
  FaInstagram,
  FaPinterestSquare,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <footer className="footer">
      {!isMobile && (
        <div className="contact-info customer">
          <h3>
            <span>Customer</span> support
          </h3>
          <p>About us</p>
          <p>Frequently asked questions</p>
          <p>Customer support</p>
        </div>
      )}
      <div className="contact-info">
        <h3>
          <span>contact</span> us
        </h3>
        <p>+61045123439</p>
        <p>help@voyagequest.com</p>
        <p>9:00 - 21:00</p>
      </div>
      <div className="social-media">
        <FaFacebookSquare />
        <FaInstagram />
        <FaPinterestSquare />
        <FaYoutube />
      </div>
    </footer>
  );
};

export default Footer;
