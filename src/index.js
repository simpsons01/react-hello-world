import React from 'react';
import ReactDOM from 'react-dom/client';

// eslint-disable-next-line
const MyInput = React.forwardRef((props, ref) => {

  const handleImperativeHandle = props.count > 5 ? 'bigger than 5' : 'smaller than 5' 
   
  React.useImperativeHandle(ref, () => handleImperativeHandle)

  return (
    <div>
      { handleImperativeHandle }
    </div>
  )
})

function App() {
  const ref = React.useRef(null)
  const [ count, setCount ] = React.useState(0)
  
  React.useEffect(() => {
    console.log(ref.current)
  })
   
  React.useEffect(() => {
    const id = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <MyInput 
      count={count}
      ref={x => {
        console.log('set ref')
        ref.current = x
      }}
    />
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
