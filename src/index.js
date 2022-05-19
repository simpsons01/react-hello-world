import React from 'react';
import ReactDOM from 'react-dom/client';

const useMyRef = function() {
  return React.useRef(0)
}

function Example() {
  console.log("                                                ")
  console.log("----------------- example rerender start! -------------")
  const [count1, setCount1] = React.useState(0)
  const [count2, setCount2] = React.useState(0)
  const countRef = React.useRef(count2)
  const myRef = useMyRef()

  const doubleCount1 = React.useMemo(() => {
    console.log("double count1 useMemo called again!")
    return count1 * 2
  }, [count1])

  React.useEffect(() => {
    console.log("useEffect called!")
    myRef.current = count2
    if(count2 % 2 === 0) {
      setTimeout(() => {
        setCount1(count2)
      }, 2000)
    }
  }, [ count2, myRef ])

  const doubleCount2 = React.useMemo(() => {
    console.log("double count2 useMemo called again!")
    return () => {
      return count2 * 2
    }
  }, [count2])
  console.log("----------------- example rerender end! -------------")
  
  return (
    <div>
      <button onClick={() => setCount2(count => count + 1)}>+</button>
      <p>myRef: {myRef.current}</p>
      <p>count2Ref: {countRef.current}</p>
      <p>count2: {count2}</p>
      <p>doubleCount2: {doubleCount2()}</p>
      <p>doubleCount1: {doubleCount1}</p>
    </div>  
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Example />);
