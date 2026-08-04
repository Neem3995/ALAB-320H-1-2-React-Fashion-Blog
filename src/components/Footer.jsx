import Nav from "./Nav.jsx";

// footer reuses nav and passes true so the footer links are shown
function Footer() {
  return (
    <footer>
      <Nav footerNav={true} />
      <p className="copyright">&copy; 2013 Valet Industries, Inc</p>
    </footer>
  );
}

export default Footer;
