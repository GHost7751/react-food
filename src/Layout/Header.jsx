import { Link } from "react-router-dom"

function Header() {
        return ( <>
    <nav className="cyan darken-4">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">React</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to={`/Movie`} >Movie</Link></li>
            <li><Link to={`/Series`} >Series</Link></li>
          </ul>
        </div>
      </nav>
      </>
        )

}

export {Header}