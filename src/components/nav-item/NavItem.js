import './NavItem.css'
import {Link} from "react-router-dom";

export default function NavItem ({value}){
    return (
        <Link to={} className='nItem'>
          {value}
        </Link>
    );
}