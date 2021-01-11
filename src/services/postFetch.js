export default function postFetch (url, data){
  const baseUrl = 'https://conduit.productionready.io'

  return fetch(baseUrl + url,
      {
        method: 'POST',
        headers: {"authorization": ""},
        body: JSON.stringify(data)
        }
        )
            .then(response => response.json())
}
