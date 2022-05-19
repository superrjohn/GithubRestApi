import React from 'react'
import { useParams, Link, Outlet } from 'react-router-dom'

import request from '../common/utils'

import { Spinner, Accordion } from 'react-bootstrap'

export default function ReposList() {
  let user = useParams()
  let [userData, setUserData] = React.useState(null)
  let [isLoading, setLoading] = React.useState(true)
  let [isPage, setPage] = React.useState(2)

  function getAPI(per_page, page) {
    return request({
      url: `users/${user.username}/repos`,
      params: {
        per_page,
        page
      }
    })
  }
//下拉加載
  function handleScroll(e) {
    if (e.target.clientHeight + parseInt(e.target.scrollTop)
      === e.target.scrollHeight) {
      getAPI(10, isPage).then((res) => {
        setUserData([...userData, ...res.data])
      })
      setPage(isPage + 1)
    }
  }

  React.useEffect(() => {
    getAPI(10, 1).then((res) => {
      setUserData(res.data)
      //console.log(res.data)
      setLoading(false)
    })
  }, [user])

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }
//手風琴要包著map生成的item,不然item之間沒有對摺效果
  return (
    <div className='repos' onScroll={handleScroll} >
      <Accordion>
      {userData.map((data) => (
        // key要放在元素的最上方,不然會報錯。
          <Accordion.Item eventKey={data.id} key={data.id}>
            <Accordion.Header as={Link} to={data.name}>
              {data.name}{ '  '}{data.language == null? '': `/ ${data.language}`}
            </Accordion.Header>
            <Accordion.Body>
              <Outlet/>
            </Accordion.Body>
          </Accordion.Item>
      ))}
      </Accordion>
    </div>
  )
}
