import './NewArticle.css'
import FooterPage from "../footer-page/FooterPage";

export default function NewArticle() {

  return (
      <div>
        <div className='new-article-form'>

          <input type="text" className='new-article-input article-title' placeholder='Article Title'/>
          <input type="text" className='new-article-input' placeholder='What`s this article about?'/>
          <textarea className='new-article-area' placeholder='Write your article (in markdown)'/>
          <input type="text" className='new-article-input' placeholder='Enter tags'/>

          <div className='new-article-btn-wrapper'>
            <input type='button' className='new-article-btn-update' value='Publish Article'/>
          </div>

        </div>

        <FooterPage/>
      </div>
  );
}