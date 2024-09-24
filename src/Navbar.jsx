import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <CustomLink to="/home" image="home.png">
          Home
        </CustomLink>
        <CustomLink to="/about" image="info-button.png">
          About
        </CustomLink>
        <CustomLink to="/contact" image="customer-service.png">
          Contact Us
        </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ image, to, children, ...props }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <img src={image} alt={children} />
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
