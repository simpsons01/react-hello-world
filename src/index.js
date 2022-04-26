import React from 'react';
import ReactDOM from 'react-dom/client';

function Foo(props) {
  console.log('get excuted')
  const [count, setCount] = React.useState(0)
  const [count2, setCount2] = React.useState(0)

  const callback = React.useCallback(
    () => {
      console.log(`count2 is ${count2} when count2 get updated`)
    }, 
    [ count2 ]
  )

  const doubleCount2 = React.useMemo(() => {
    console.log('excute double')
    return count2 * 2
  }, [count2])

  React.useEffect(() => {
    callback()
  })

  React.useEffect(() => {
    if(count !== 0 && count % 2 === 0) {
      setCount2(prevCount2 => prevCount2 + 1)
    }
  }, [count])

  const add = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <React.Fragment>
      <button onClick={add}>
        ++
      </button>
      <div>{count}</div>
      <div>{count2}</div>
      <div>{doubleCount2}</div>
    </React.Fragment>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Foo />);
