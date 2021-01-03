export default function doFetch (url){
  const baseUrl = 'https://conduit.productionready.io'
  fetch(baseUrl + url)
      .then(response => response.json())
      .then(json => json)
}
