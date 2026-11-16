const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Favorites", href: "/favorites" },
  { label: "About", href: "/about" },
];

function NavBar({ currentPath, favoriteCount }) {
  return (
    <header className="site-header">
      <a className="site-brand" href="/" aria-label="Movie Shelf home">
        <span className="brand-mark" aria-hidden="true">M</span>
        <span>Movie Shelf</span>
      </a>
      <nav aria-label="Main navigation">
        <ul className="navigation-list">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a
                className="navigation-link"
                href={link.href}
                aria-current={currentPath === link.href ? "page" : undefined}
              >
                {link.label}
                {link.href === "/favorites" && favoriteCount > 0 && (
                  <span className="favorite-count">{favoriteCount}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
