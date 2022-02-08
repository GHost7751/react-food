import { Link } from "react-router-dom"

function Header() {
        return ( <>
    <nav className="indigo accent-1">
        <div className="nav-wrapper">
          <a href="!#" className="brand-logo">React</a>
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