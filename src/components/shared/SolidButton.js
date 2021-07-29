// import Button from 'react-bootstrap/Button'
// Code Along: Replace with styled components button
// first import styled-components
import styled from 'styled-components'

// we won't be using the bootstrap button anymore
// const SolidButton = Button

const SolidButton = styled.button`
  border-radius: ${props => props.rounded ? '25px' : '3px'};
  margin: 0 1em;
  padding: 0.25 1em;
  border: 2px solid;
  background-color: ${props => props.primaryColor ? props.primaryColor : 'transparent'};
  color: ${props => props.primaryColor ? 'white' : 'HotPink'};
  &:hover {
    color: yellow;
  }
`

export default SolidButton
