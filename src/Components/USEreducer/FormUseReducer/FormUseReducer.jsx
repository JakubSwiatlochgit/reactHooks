import { useReducer, useRef } from 'react'
import { INITIAL_STATE, formReducer } from './formReducer'
import { ACTION_TYPES } from './postActionTypes'


const FormUseReducer = () => {

  const [state,dispatch] = useReducer(formReducer, INITIAL_STATE)
  const tagRef = useRef()


  function handleChange(e) {
    dispatch({
      type: ACTION_TYPES.CHANGE_INPUT,
      payload: {name:e.target.name, value:e.target.value
    }})
  }
  function handleTags(){
    const tags = tagRef.current.value.split(",")
    tags.forEach((tag) => {
      dispatch({type: ACTION_TYPES.ADD_TAG, payload:tag})
    })
  }
  console.log(state)
  return (
    <div>
    <h1>UseReducer</h1>

      <form>
        <input type="text" placeholder="title" onChange={handleChange} name="title"/>
        <input type="text" placeholder="Desc" onChange={handleChange} name="desc"/>
        <input type="number" placeholder="Price" onChange={handleChange} name="price"/>

        <p>Category</p>
        <select onChange={handleChange} name="category">
          <option value="sneakers">Sneakers</option>
          <option value="tshirts">T-Shirts</option>
          <option value="jeans">Jeans</option>
        </select>

        <p>Tags</p>
        <textarea ref={tagRef} placeholder="Sepearate tags with commas..."></textarea>
        <button onClick={handleTags}type="button">Add Tags</button>

        <div className="tags">
          {
            state.tags.map((tag) => (
              <small onClick={() => dispatch({type: ACTION_TYPES.REMOVE_TAG, payload: tag})} key={tag}>
                {tag}
              </small>
            ))
          }
        </div>

        <div className="quantity">
          <button onClick={() => dispatch({type:ACTION_TYPES.DECREASE})} type="button"> - </button>
          <span>Quantity ({state.quantity})</span>
          <button onClick={() => dispatch({type:ACTION_TYPES.INCREASE})} type="button"> + </button>
        </div>

      </form>
    </div>
  )
}

export default FormUseReducer