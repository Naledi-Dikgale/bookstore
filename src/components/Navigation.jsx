import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

function Navigation() {
  return (
    <nav className="nav">
      <ul>
        <li className="logo">
          <h1>Bookstore CMS</h1>
          <a href="/">BOOKS</a>
          <a href="/">CATEGORIES</a>
        </li>
        <li>
          <a aria-label="icon" href="/categories"><FontAwesomeIcon icon={faUser} className="icon" /></a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
