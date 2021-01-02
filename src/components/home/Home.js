import './Home.css'
import NavItem from "../nav-item/NavItem";

export default function Home() {

  const navArr = ['Your Feed', 'Global Feed']
  return (
      <div>
        <div className='banner'>
          <h1>conduit</h1>
          <p>A place to share your <i>Angular</i> knowledge.</p>
        </div>
        <div className='body'>

          <div className='column-post'>
            <div className='post-nav-link'>
              {navArr.map((value, i) => <NavItem key={i} value={value}/>)}
            </div>
          </div>
          <div className='column-tag'>
            <p>Popular Tags</p>
          </div>
        </div>
      </div>
  );
}