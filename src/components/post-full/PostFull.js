import './PostFull.css'
import {Link, withRouter} from "react-router-dom";
import doFetch from "../../services/doFetch";
import {getChosenPost} from "../../redux/action-creators";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Loading from "../../services/Loading";
import FooterPage from "../footer-page/FooterPage";
import {favoriteChosenArticle, followChosenUser} from "../../redux/action-creators/user";

function PostFull({match: {params: {linkToFullPost}}}) {

  const dispatch = useDispatch()
  const {chosenPost, loggedIn} = useSelector(({homePage: {chosenPost}, user: {loggedIn}}) => ({chosenPost, loggedIn}))

  useEffect(() => {
    doFetch(`/api/articles/${linkToFullPost}`)
        .then(post => {
          return dispatch(getChosenPost(post.article))
        })
  }, [])

  if (chosenPost.author) {
    const {
      author: {bio, following, image, username},
      body, createdAt, description, favorited, favoritesCount, slug, tagList, title, updatedAt
    } = chosenPost

    const month = new Date(createdAt).getMonth() + 1
    const day = new Date(createdAt).getDay()
    const year = new Date(createdAt).getFullYear()

    return (
        <div>

          <div className='banner-chosen-post'>
            <h1><b>title</b></h1>
            <div className='chosen-post-header'>
              <div className='chosen-post-user-info'>
                <img className='chosen-user-photo' src={`${image}`} alt='аватар'/>
                <div>
                  <p className='chosen-post-user-name'>{username}</p>
                  <p className='chosen-post-user-date'>{`${month}.${day}, ${year}`}</p>
                </div>
              </div>
              <div className='chosen-post-user-info'>

                <input onClick={() => dispatch(followChosenUser())}
                       type="button" value={1 ? `Follow ${username}` : `Unfollow ${username}`}
                       className={1 ? 'chosen-post-btn-like' : 'chosen-post-btn-like chosen-post-btn-unlike'}/>

                <input onClick={() => dispatch(favoriteChosenArticle())}
                       type="button"
                       value={1 ? `Favorite Article (${favoritesCount})` : `Unfavorite Article (${favoritesCount})`}
                       className={1 ? 'chosen-post-btn-like' : 'chosen-post-btn-like chosen-post-btn-unlike'}/>
              </div>
            </div>
          </div>

          <div className='chosen-body'>

            <div className='chosen-body-body'>{body}</div>

            <div className='chosen-post-user-wrapper'>
              <div className='chosen-post-user-info'>
                <img className='chosen-user-photo' src={`${image}`} alt='аватар'/>
                <div>
                  <p className='chosen-post-user-name name2'>{username}</p>
                  <p className='chosen-post-user-date'>{`${month}.${day}, ${year}`}</p>
                </div>
              </div>
              <div className='chosen-post-user-info'>

                <input onClick={() => dispatch(followChosenUser())}
                       type="button" value={1 ? `Follow ${username}` : `Unfollow ${username}`} required
                       className={1 ? 'chosen-post-btn-like' : 'chosen-post-btn-like chosen-post-btn-unlike'}/>

                <input onClick={() => dispatch(favoriteChosenArticle())}
                       type="button"
                       value={1 ? `Favorite Article (${favoritesCount})` : `Unfavorite Article (${favoritesCount})`}
                       className={1 ? 'chosen-post-btn-like' : 'chosen-post-btn-like chosen-post-btn-unlike'}/>
              </div>
            </div>

            {loggedIn
                ? <div className='comment-wrapper'>
                  <textarea className='input-comment' placeholder='Write a comment...'/>
                  <div className='comment-btn-wrapper'>
                    <div className='comment-btn-wrapper-2'>
                      <img src='../../img/default.jpg' className='chosen-user-photo' alt='avatar'/>
                      <input type="button" value='Post Comment' className='post-comment-btn'/>
                      {/*TODO*/}
                    </div>
                  </div>
                </div>
                : <div className='text'>
                  <Link to={'/login'} className='text-link'>Sign in</Link>
                  <p> or </p>
                  <Link to={'/register'} className='text-link'>sign up</Link>
                  <p> to add comments on this article.</p>
                </div>

            }

          </div>

          <FooterPage/>

        </div>
    )

  }
return <Loading/>
}

export default withRouter(PostFull)