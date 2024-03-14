import {useState} from 'react'

const ToggleTextUseState = () => {
const initialState = true
  
  const [toggleText, setToggleText] = useState(initialState)

  const handleToggleText = () => {
    setToggleText(!toggleText)
  }
  return (
    <div className="App">
      <h1>UseState Hook</h1>
      <div>
        {toggleText ? <p>Hello World</p> : null}
        <button onClick={() => handleToggleText()}>Toggle Text</button>
      </div>

    </div>
  )
}

export default ToggleTextUseState