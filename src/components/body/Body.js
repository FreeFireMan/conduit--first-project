import './Body.css'
export default function Body (){

    const navArr = ['Your Feed', 'Global Feed']
    return (
        <div className='body'>
            <div className='column-post'>
                <ul className='post-nav-link'>
                    {navArr.map((value,i) => <li key={i}>{value}</li>)}
                </ul>
            </div>
            <div className='column-tag'>
              <p>Popular Tags</p>
            </div>
        </div>
    );
}