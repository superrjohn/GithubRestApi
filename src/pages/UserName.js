import React from 'react'
import { useParams , Link, Outlet} from 'react-router-dom'

import { Spinner, Card, Button, Container, Row, Col } from 'react-bootstrap'

import request from '../common/utils'

export default function UserName() {
  let [userData, setUserData] = React.useState(null)
  let [isLoading, setLoading] = React.useState(true)
  let user = useParams()

  function getAPI(per_page, page) {
    return request({
      url: `users/${user.username}`,
      params: {
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
    .catch( (error) => alert('請輸入正確用戶名稱'))
  }, [user])

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }

  return (
    <Container>
      <Row >
        <Col sm={4}>
          <Card border="primary" className='UserName text-center' >
            <Card.Img variant="top" src={userData.avatar_url} />
            <Card.Body>
              <Card.Title>{userData.login}</Card.Title>
              <Card.Text>
                {userData.bio}
              </Card.Text>
              <Button as={Link} to='repos' variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={8}>
          <Outlet/>
        </Col>
      </Row>
    </Container>

  )
}