import {useContext} from 'react'
import { GlobalContext } from '../../../context'

const ComponentTwo = () => {

  const {theme} = useContext(GlobalContext)

  return (
    <div>
      <h2>Register</h2>
      <button style={theme === 'dark' ? {backgroundColor: 'white', color: 'black'} : {backgroundColor: 'black', color : 'white'}}>Register</button>
    </div>
  )
}

export default ComponentTwo