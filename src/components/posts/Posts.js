import './Posts.css'
import React, {useEffect} from "react";
import doFetch from "../../services/doFetch";

export default function Posts (){

  useEffect( () => {
  doFetch('/api/articles?limit=10&offset=0')
      .then(posts => console.log(posts))
  }, [])

    return (
        <div>
            111111
        </div>
    );
}