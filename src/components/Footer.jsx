import "../css/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <p className="footer-text">{`${new Date().getFullYear()}@Karl Bautista`}</p>
        </footer>
    );
}

export default Footer;
