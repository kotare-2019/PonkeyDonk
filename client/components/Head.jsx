import React from 'react'
import { Animated } from "react-animated-css";


{/* <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
    <div>
        hello world ;)
    </div>
</Animated> */}

const App = () => {
  return (

    <Animated animationIn="bounceIn" animationInDuration="infinite" isVisible={true}>
      <img className="bigHead" src="./Head.png" />
    </Animated>


  )
}

export default App
