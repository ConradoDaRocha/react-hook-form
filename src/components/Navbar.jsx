import {Link} from 'react-router-dom'
function Navbar() {
    return (
      <nav className="nav">
          <Link to='/'><img src="./vite.svg" alt="logo"/></Link>
          <ul>
              <Link to="/">
                <li>Início</li>
              </Link>
              <Link to="/signup">
                <li>Inscreva-se</li>
              </Link>
              <Link to="/login">
                <li>Entrar</li>
              </Link>
          </ul>
      </nav>
      
  
    )
  }
  export default Navbar
  