import {useContext} from 'react'
import ComponentOne from './ChangeColor/ComponentOne'
import ComponentTwo from './ChangeColor/ComponentTwo'
import { GlobalContext } from '../../context'
const ChangeThemeUseContext = () => {

  const {theme, setTheme} = useContext(GlobalContext)
  console.log(theme)
  console.log(setTheme)
  return (
    <div>
    <h1>UseContext</h1>
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change Theme</button>
        <div style = {{display: 'flex', gap: '10px', justifyContent : 'center'}}>
            <ComponentOne/>
            <ComponentTwo/>

        </div>
    </div>
  )
}

export default ChangeThemeUseContext