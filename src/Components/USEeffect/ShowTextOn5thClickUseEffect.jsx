import {useState, useEffect} from 'react'

const useEffectExample = () => {
    const [count, setCount] = useState(0)
    const [showText, setShowText] = useState(false)
    useEffect(() => {
        console.log("run only once")
    },[])

    // useEffect(() => {
    //     console.log("run only once")
    // })

    useEffect(() => {
        if(count === 5) setShowText(true)
    },[count])

    
  return (
    <div>
        <h1>UseEffectHook</h1>
        <p>Count is {count}</p>
        {showText ? <h3>Hello World</h3> : null}
        <button onClick={() => setCount(c => c+1)}>Count</button>
    </div>
  )
}

export default useEffectExample