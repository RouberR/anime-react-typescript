import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

export const Cart = () => {
    return (
<Row xs={1} md={2} className="g-4">
  {Array.from({ length: 2 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="https://animaunt.org/uploads/posts/2021-10/1633142260_ousama-ranking.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
       
    )
}
