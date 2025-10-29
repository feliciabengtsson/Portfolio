export default function MainNavigation() {
  return (
    <header>
      <div id="header">
        <div className="hamburger-menu"></div>
        <div className="navbar-wrapper">
          <nav>
            <div id="nav-links-wrapper">
              <ul className="navbar">
                <li>
                  <a href="#projects">Projekt</a>
                </li>
                <li>
                  <a href="https://tarawens-corner.vercel.app/">Art</a>
                </li>
                <li>
                  <a
                    href="images/CV FEU alt. 2.pdf"
                    download="CV-felicia-bengtsson"
                  >
                    CV
                  </a>
                </li>
                <li>
                  <a href="#contact-wrapper">Kontakt</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
