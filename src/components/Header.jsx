import Nav from "./Nav.jsx";

// header keeps the blog title and the top navigation together
function Header() {
  return (
    <header>
      <h1>Sartre's List</h1>
      <h2>Better-Dressed People</h2>
      <Nav />
    </header>
  );
}

export default Header;
