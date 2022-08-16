import React from 'react'
import withStyles from '../HOC/withStyles';

function StyledButton(props) {
    console.log(props)
  return (
    <div>
      <button {...props}>Click Me</button>
    </div>
  )
}
// added HOC,which contain the style that got added in the withStyles HOC!
export default withStyles(StyledButton)