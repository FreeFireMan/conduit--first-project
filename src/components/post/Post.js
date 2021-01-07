import './Post.css'
import {Link} from "react-router-dom";
import {choseNavLink} from "../../redux/action-creators";
import {useDispatch} from "react-redux";

export default function Post(
    {post: {author: {image, username}, body, createdAt, favoritesCount, slug, tagList, title}}
) {
  const dispatch = useDispatch()
  const month = new Date(createdAt).getMonth() + 1
  const day = new Date(createdAt).getDay()
  const year = new Date(createdAt).getFullYear()

  return (
      <div className='post-wrapper'>
        <div className='post-header'>
          <div className='post-user-info'>
            <img className='user-photo' src={`${image}`} alt='аватар'/>
            <div>
              <p className='post-user-name'>{username}</p>
              <p className='post-user-date'>{`${month}.${day}, ${year}`}</p>
            </div>
          </div>
          <div className='post-user-info'>
            <p className='fs-15'>{favoritesCount}</p>
            <input type="button" value='like' className={1 ? 'post-btn-like' : 'post-btn-like post-btn-unlike'}/>
          </div>
        </div>
        <h3>{title}</h3>
        <p className='post-body'>{body}</p>
        <div className='post-all-info-wrapper'>
          <Link onClick={() => dispatch(choseNavLink(''))} className='post-all-info' to={`/article/${slug}`}>Read more...</Link>
          <div className='post-tag-wrapper'>
            {tagList.map((item, i) => <div key={i} className='post-tag'>{item}</div>)}
          </div>
        </div>
      </div>
  );
}