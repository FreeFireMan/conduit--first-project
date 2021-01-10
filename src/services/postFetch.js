export default function postFetch (url, data){
  const baseUrl = 'https://conduit.productionready.io'

  return fetch(baseUrl + url,
      {data: JSON.stringify(data), method: 'POST', headers: {authorization: ""}})
            .then(response => response.json())
}
