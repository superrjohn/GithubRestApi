import axios from 'axios'

export default function request(config){
  const instance = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 7000,
  headers: {'accept': 'application/vnd.github.v3+json'}
})
  return instance(config)
}

/*export default function getAPI(per_page,page) {
  return request({
    url: `${searchName}/repos`,
    params: {
      per_page:per_page,
      page
    }
  })
} */