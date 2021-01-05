import './Post.css'
import {Link} from "react-router-dom";

export default function Post({post, post: {
    author: {bio, following, image, username},
    body, createdAt, description, favorited, favoritesCount, slug, tagList, title, updatedAt}
                             }) {
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
        <Link className='post-all-info' to={`/article/${slug}`}>Read more...</Link>
      </div>
  );
}