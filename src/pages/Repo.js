import React from 'react'
import { useParams } from 'react-router-dom'

import { Spinner , Table } from 'react-bootstrap'

import request from '../common/utils'

export default function Repo() {
  let user = useParams()
  let [userData, setUserData] = React.useState(null)
  let [isLoading , setLoading] = React.useState(true)
  //console.log(user)
 
  function getAPI(per_page,page) {
    return request({
      url: `repos/${user.username}/${user.repo}`,
      params:{
        per_page,
        page
      }
    })
  }

  React.useEffect(() => {
    getAPI().then((res) => {
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

  return(
      <Table striped bordered hover size="sm" 
      className='repoTable'>
      <thead>
      <tr>
            <th>full_name</th>
            <th>description</th>
            <th>stargazers_count</th>
            <th>url</th>
          </tr>
      </thead>
      <tbody>
          <tr>
            <td>{userData.full_name}</td>
            <td>{userData.description == null? 'null' : userData.description}</td>
            <td>{userData.stargazers_count}</td>
              <td>
                <a href={userData.svn_url }target="_blank">
                  Go!
                </a>
              </td>
          </tr>
        </tbody>
      </Table>
  )
}