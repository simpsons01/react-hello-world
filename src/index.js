import React from 'react';
import ReactDOM from 'react-dom/client';

function Counter() {
  const ref = React.useRef(0)
  const [count, setCount] = React.useState(0)
  const [step, setStep] = React.useState(1)

  React.useEffect(() => {
    ref.current = ref.current + 1
    console.log('use effect callback excute')
    console.log(ref.current)
    const id = setInterval(() => {
      setCount(prevCount => prevCount + step)
    }, 1000)  
   return () => {
     console.log('clean effect callback excute')
     console.log(ref.current)
     clearInterval(id)
   }
  }, [step])

  const onInput = function(e) {
    const val = parseInt(e.target.value)
    if(val == '') {
      return setStep(1)
    } 
    setStep(val)
  }

  return (
    <React.Fragment>
      <div>{count}</div>
      <input onInput={onInput}></input>
    </React.Fragment>
  )
}
const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<Counter />);
