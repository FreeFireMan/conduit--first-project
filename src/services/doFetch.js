export default function doFetch (url){
  const baseUrl = 'conduit.productionready.io'
  fetch(baseUrl + url)
      // .then(response => response.json())
      .then(json => console.log(json))
}
