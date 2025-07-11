import "../css/Footer.css";
import Facebook from "../assets/facebook.png"
import LinkedIn from "../assets/linkedin.png"
import Github from "../assets/github-sign.png"

function Footer() {
    return (
        <footer className="footer">
            <div className="title">
                  <p className="footer-text">{`${new Date().getFullYear()}@Karl Bautista`}</p>
            </div>
            <div className="social-links">
                <a href="https://www.facebook.com/karl.bautista.254770" target="_blank"><img src={Facebook} alt="" /></a>
                   <a href="https://www.linkedin.com/in/karl-bautista-86417b308/" target="_blank"><img src={LinkedIn} alt="" /></a>
                     <a href="https://github.com/KarlBautista" target="_blank"><img src={Github} alt="" /></a> 
            </div>
          
        </footer>
    );
}

export default Footer;
