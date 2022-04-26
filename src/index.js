import React from 'react';
import ReactDOM from 'react-dom/client';

function Foo(props) {
  console.log('get excuted')
  const { current: bob } = React.createRef({ name: 'bob' })
  const foo = { name: 'foo' }
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if(window.bob == null) {
      window.bob = bob
    }
    if(window.foo == null) {
      window.foo = foo
    }
    console.log(window.bob === bob)
    console.log(window.foo === foo)
  })

  const add = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <React.Fragment>
      <button onClick={add}>
        ++
      </button>
      <div>{count}</div>
    </React.Fragment>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Foo />);
