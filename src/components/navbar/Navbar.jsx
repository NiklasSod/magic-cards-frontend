import { Link } from 'react-router-dom';
import StyledNavbar from './styled';

function Navbar() {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </StyledNavbar>
  );
}

export default Navbar;
