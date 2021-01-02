import './Posts.css'
import doFetch from "../../services/doFetch";
import {useEffect} from "react/cjs/react.production.min";

export default function Posts (){
  // useEffect( () => {
  doFetch('/api/articles')
      // .then(value => console.log(value))
  // }, [])
    return (
        <div>
            111111
        </div>
    );
}