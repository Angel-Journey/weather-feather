import React from 'react'
import teamMembers from '../../data/team-members'
// import Card and Button
import { Card, Button } from 'react-bootstrap'

const TeamMemberCards = () => {
  const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
  }

  const teamCards = teamMembers.map(member => {
    return (
      <Card key={member.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={member.backgroundUrl} />
        <Card.Body>
          <Card.Title>{member.name}</Card.Title>
          <Card.Text>{member.description}</Card.Text>
          <Button>Contact</Button>
        </Card.Body>
      </Card>
    )
  })

  return (
    <div style={cardContainerLayout}>
      { teamCards }
    </div>
  )
}

export default TeamMemberCards
