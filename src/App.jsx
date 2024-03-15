import { useState } from 'react'
import ToggleTextUseState from './Components/USEstate/ToggleTextUseState'
import ReadDataFromInputsUseState from './Components/USEstate/ReadDataFromInputsUseState'
import ShowTextOn5thClickUseEffect from './Components/USEeffect/ShowTextOn5thClickUseEffect'
import CallApiUseEffect from './Components/USEeffect/CallApiUseEffect'

function App() {
  
  return (
    <div>
      <CallApiUseEffect/>

      <ShowTextOn5thClickUseEffect/>

      <ReadDataFromInputsUseState/>
      <ToggleTextUseState/>
    </div>
  )
}

export default App
