import ToggleTextUseState from './Components/USEstate/ToggleTextUseState'
import ReadDataFromInputsUseState from './Components/USEstate/ReadDataFromInputsUseState'
import ShowTextOn5thClickUseEffect from './Components/USEeffect/ShowTextOn5thClickUseEffect'
import CallApiUseEffect from './Components/USEeffect/CallApiUseEffect'
import ChangeThemeUseContext from './Components/USEcontext/ChangeThemeUseContext'
import GlobalState from './context'
function App() {
  
  return (
    <div>

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
