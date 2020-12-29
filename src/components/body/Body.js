import './Body.css'
import NavItem from "../nav-item/NavItem";
export default function Body ({loginUser}){

    const navArr = ['Your Feed', 'Global Feed']
    return (
        <div className='body'>
            <div className='column-post'>
                <div className='post-nav-link'>
                    {navArr.map((value,i) => <NavItem key={i} value={value}/>)}
                </div>
            </div>
            <div className='column-tag'>
              <p>Popular Tags</p>
            </div>
        </div>
    );
}