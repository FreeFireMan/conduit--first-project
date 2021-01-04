export default function doFetch (url){
  const baseUrl = 'https://conduit.productionready.io'
  return fetch(baseUrl + url)
      .then(response => response.json())
}
