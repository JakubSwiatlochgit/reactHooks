import { useReducer } from 'react'
import { INITIAL_STATE, postReducer } from './postReducer'
import { ACTION_TYPES } from './postActionTypes'

const FetchApiUseReducer = () => {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE)


  function handleFetch(){
    dispatch({type: ACTION_TYPES.FETCH_START})


    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      // {type: "FETCH_SUCCESS", payload: data}
      dispatch({type: ACTION_TYPES.FETCH_SUCCESS, payload:data})
    })
    .catch(()=> {
      dispatch({type: ACTION_TYPES.FETCH_ERROR})
    })
  }

  return (
    <div>
    <h1>UseReducer</h1>
      <button onClick={handleFetch}> {state.loading? "Wait..." : "Fetch the post"}</button>

      <p>{state.post.title}</p>
      <span>{state.error && "Something went wrong!" }</span>
    </div>
  )
}

export default FetchApiUseReducer