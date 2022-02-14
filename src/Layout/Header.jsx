import { Link } from "react-router-dom"

function Header() {
        return ( <>
    <nav className="cyan darken-4">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">React</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to={`/All`} >All</Link></li>
          </ul>
        </div>
      </nav>
      </>
        )

}

export {Header}