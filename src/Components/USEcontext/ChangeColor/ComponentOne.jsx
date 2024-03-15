import {useContext} from 'react'
import { GlobalContext } from '../../../context'

const ComponentOne = () => {
  const {theme} = useContext(GlobalContext)

  return (
    
    <div>
      <h2>Login</h2>
      <button style={theme === 'dark' ? {backgroundColor: 'white', color: 'black'} : {backgroundColor: 'black', color : 'white'}}>Login</button>
    </div>
  )
}

export default ComponentOne