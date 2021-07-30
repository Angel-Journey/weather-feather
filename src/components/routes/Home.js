import React from 'react'
// import SolidButton from '../shared/SolidButton'
// import OutlineButton from '../shared/OutlineButton'
// import { Link } from 'react-router-dom'
// import styled from 'styled-components'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import Forecast from '../Forecast/Forecast'

const Home = () => {
  // const backgroundImageUrlLeft = 'https://images.unsplash.com/photo-1573994824701-f3c848695ab0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'
  // console.log(backgroundImageUrl)

  const backgroundImageUrlLeft = 'https://images.unsplash.com/photo-1590552515252-3a5a1bce7bed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'

  const rowStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
  }

  const homeStylesLeft = {
    // center the heading in the container
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    // add the background image, using a url
    backgroundImage: `url(${backgroundImageUrlLeft})`,
    // make the background cover the entire width of the div
    backgroundSize: 'cover',
    // center the background
    backgroundPosition: 'center',
    // tell the div to take up the entire viewport height
    height: '100vh',
    width: '80vh',
    color: 'white',
    textAlign: 'center',
  }

  const homeStylesRight = {
    // center the heading in the container
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: '0px',
    // add the background image, using a url
    // backgroundImage: `url(${backgroundImageUrlRight})`,
    backgroundColor: 'grey',
    // make the background cover the entire width of the div
    backgroundSize: 'cover',
    // center the background
    backgroundPosition: 'center',
    // tell the div to take up the entire viewport height
    height: '100vh',
    width: '100vh',
    color: 'white',
    textAlign: 'left',
  }

  return (
      <div style={rowStyles}>
        <div style={homeStylesLeft}>
        <Container>
          <Row>
            <Col> <h1>Weather Feather 🦚</h1> </Col>
            <Col> <h2>Find out the temperature, weather conditions, and more...</h2> </Col>
          </Row>
        </Container>
        </div>
      <div style={rowStyles} >
        <div style={homeStylesRight}>
            {/* need to update to get weather
      //     <Container>
      //     <Form>
      //       <Row className="align-items-center">
      //         <Col xs="auto">
      //           <Form.Control placeholder="City" />
      //         </Col>
      //         <Col xs="auto">
      //           <Form.Control placeholder="State" />
      //         </Col>
      //         <Col xs="auto" className="my-1">
      // <OutlineButton primaryColor='HotPink' rounded='true' type="submit">Get Weather</OutlineButton>
    </Col>
            </Row>
          </Form>   */}
            <Row>
                  {/* // <Col>           <Link to='/about'>
                  //             <OutlineButton primaryColor='HotPink' rounded='true'>Get Weather</OutlineButton>
                  //           </Link> </Col>
                  <Col> <h1> Location: </h1> </Col>
                  <Col> <h1> Temperature: </h1> </Col>
                  <Col> <h1> Humidy: </h1> </Col>
                  <Col> <h1> Conditions: </h1> </Col>  */}
                  <Col> <Forecast /> </Col>
            </Row>
        </div>
      </div>
    </div>
  )
}
export default Home
