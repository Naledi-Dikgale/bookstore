import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

function Navigation() {
  return (
    <nav className="nav">
      <ul>
        <li className="logo">
          <h1>Bookstore CMS</h1>
          <a href="/">Home</a>
          <a href="/">Books</a>
        </li>
        <li>
          <a aria-label="icon" href="/categories"><FontAwesomeIcon icon={faUser} /></a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
