export default function doFetch (url, options){
  const baseUrl = 'https://conduit.productionready.io'
  return fetch(baseUrl + url, options)
            .then(response => response.json())
}
