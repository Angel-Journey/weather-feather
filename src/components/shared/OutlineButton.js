// import Button from 'react-bootstrap/Button'
// LAB: Replace with styled components button
import styled from 'styled-components'
import SolidButton from './SolidButton'

// this is how we used the bootstrap button
// const OutlineButton = Button

const OutlineButton = styled(SolidButton)`
  color: ${props => props.primaryColor};
  background-color: transparent;
  font-size: 1rem;
  &:hover {
    color: white;
    background-color: ${props => props.primaryColor}
  }
`

export default OutlineButton
