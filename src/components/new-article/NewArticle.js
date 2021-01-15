import './NewArticle.css'
import {useState} from 'react'
import FooterPage from "../footer-page/FooterPage";
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import postFetch from "../../services/postFetch";
import Error from "../error/Error";
import {getErrorOnUpdateInfo} from "../../redux/action-creators";

export default function NewArticle() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [body, setBody] = useState('')
  const [tagList, setTagList] = useState('')
  const [created, setCreated] = useState(null)

  const dispatch = useDispatch()
  const {loggedIn, token, errors} = useSelector(({user: {loggedIn, token, errors}}) => ({loggedIn, token, errors}))


  if (created) {
    return <Redirect to={`/article/${created.data.article.slug}`}/>
  }
  if (!loggedIn) {
    return <Redirect to="/"/>
  }

  const createNewArticle = () => {
    const url = '/api/articles/'
    const options = {
      method: 'POST',
      headers: {
        authorization: `Token ${token}`
      },
      data: {
        article: {title, description, body, tagList}
      }
    }
    postFetch(url, options)
        .then(response => setCreated(response))
        .catch(({response: {data: {errors}}}) => dispatch(getErrorOnUpdateInfo(errors)))
  }
  return (
      <div>

        <div className='new-article-form'>
          {errors && <Error errors={errors}/>}
          <input onInput={(e) => setTitle(e.currentTarget.value)}
                 type="text" className='new-article-input article-title' placeholder='Article Title'/>
          <input onInput={(e) => setDescription(e.currentTarget.value)}
                 type="text" className='new-article-input' placeholder='What`s this article about?'/>
          <textarea onInput={(e) => setBody(e.currentTarget.value)}
                    className='new-article-area' placeholder='Write your article (in markdown)'/>
          <input onInput={(e) => setTagList(e.currentTarget.value)}
                 type="text" className='new-article-input' placeholder='Enter tags'/>

          <div className='new-article-btn-wrapper'>
            <input onClick={() => createNewArticle()} type='button' className='new-article-btn-update' value='Publish Article'/>
          </div>

        </div>

        <FooterPage/>
      </div>
  );
}
