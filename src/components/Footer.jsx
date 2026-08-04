import Nav from "./Nav.jsx";

function Footer() {
  return (
    <footer>
      <Nav footerNav={true} />
      <p className="copyright">&copy; 2013 Valet Industries, Inc</p>
    </footer>
  );
}

export default Footer;
