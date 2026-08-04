function Nav(props) {
  if (props.footerNav) {
    return (
      <nav className="footerNavigation" aria-label="Footer Navigation">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Women's</a></li>
          <li><a href="#">Men's</a></li>
          <li><a href="#">On the Street</a></li>
          <li><a href="#">The Catwalk</a></li>
          <li><a href="#">AdWatch</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Tips</a></li>
        </ul>
      </nav>
    );
  }

  return (
    <nav className="mainNavigation" aria-label="Main Navigation">
      <ul>
        <li><a href="#">Women's</a></li>
        <li><a href="#">Men's</a></li>
        <li><a href="#">On the Street</a></li>
        <li><a href="#">The Catwalk</a></li>
        <li><a href="#">AdWatch</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
