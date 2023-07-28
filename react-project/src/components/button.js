import { Component } from "react";
import './buttonStyles.css';

class Button extends Component{
  render(){
    return(
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Portfolio</h1>

        <ul className="nav-menu">
          <li>
            <a href="/">
              <i className="fa-solid fa-arrow-right">Back to Games</i>
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Button;