import axios from "axios";

export default function postFetch(url, option) {
  const baseUrl = 'https://conduit.productionready.io'
  const reqOption = {
    ...option,
  }


  return axios(baseUrl + url, reqOption)
      .then(response => response)
}


