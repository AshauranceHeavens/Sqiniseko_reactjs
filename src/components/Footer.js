import phone from "./../images/official/phone.svg";
import email from "./../images/official/email.svg";
// import whatsapp from "./../images/official/whtsapp.svg";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <ul>
          <li>
            <span>
              {/* <img src={phone} alt="phone" /> */}
              <i className="bi-phone"></i>
              <a href="tel:+27766900423">Phone</a>
            </span>
          </li>
          <li>
            <span>
              <i className="bi-whatsapp"></i>
              <a
                href="https://wa.me/27766900423/?text=Hi%20Sqiniseko%20I%20got%20your%20number%20from%20your%20web%20profile"
                target="_blank">
                Whatsapp
              </a>
            </span>
          </li>
          <li>
            <span>
              {/* <img src={email} alt="email" /> */}
              <i className="bi-envelope"></i>
              <a href="mailto:ashaurance@gmail.com" target="_blank">
                Email
              </a>
            </span>
          </li>
        </ul>
        <p>Copyright &copy; 2023</p>
      </div>
    </section>
  );
};
export default Footer;
