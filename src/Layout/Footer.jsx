import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithubSquare,
    faVk,
    faInstagram
  } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return (<> 
        <footer className='page-footer white'>
        <div className="footer-copyright cyan darken-4 " >
        <div className="container ">
            <li className="icons ">
                <a href="https://www.instagram.com/romkagh/" target="blank"><FontAwesomeIcon icon={faInstagram} size="2x" color="#18ed34" /></a>
                <a href="https://vk.com/ghostik775/" target="blank"><FontAwesomeIcon icon={faVk} size="2x" color="#18ed34"/></a>
                <a href="https://github.com/GHost7751/" target="blank"><FontAwesomeIcon icon={faGithubSquare} size="2x" color="#18ed34"/></a>
            </li>
        </div>
        </div>
        </footer> 
        </>)
}

export {Footer}