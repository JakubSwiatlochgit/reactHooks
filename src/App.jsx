import ToggleTextUseState from './Components/USEstate/ToggleTextUseState'
import ReadDataFromInputsUseState from './Components/USEstate/ReadDataFromInputsUseState'
import ShowTextOn5thClickUseEffect from './Components/USEeffect/ShowTextOn5thClickUseEffect'
import CallApiUseEffect from './Components/USEeffect/CallApiUseEffect'
import ChangeThemeUseContext from './Components/USEcontext/ChangeThemeUseContext'
import BasicOperationsUseReducer from './Components/USEreducer/BasicOperationsUseReducer'
import FetchApiUseReducer from './Components/USEreducer/FetchFromApi/FetchApiUseReducer'

import GlobalState from './context'
function App() {
  
  return (
    <div>

      <FetchApiUseReducer/>
      <BasicOperationsUseReducer/>


      <GlobalState>
        <ChangeThemeUseContext/>
      </GlobalState>
      

      <CallApiUseEffect/>
      <ShowTextOn5thClickUseEffect/>

      <ReadDataFromInputsUseState/>
      <ToggleTextUseState/>
    </div>
  )
}

export default App
