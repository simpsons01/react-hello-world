import React from 'react';
import ReactDOM from 'react-dom/client';

// eslint-disable-next-line
const MyInput = React.forwardRef((props, ref) => {

  const _ref = React.useRef(null)

  const handleImperativeHandle = {
    focus: () => {
      _ref.current.focus()
    },
    compare: (parentRef) => {
      console.log(parentRef.current === handleImperativeHandle) // true
    }
  }
   
  React.useImperativeHandle(ref, () => handleImperativeHandle)

  return (
    <input 
      ref={inputNode => {
        console.log("set ref!")
        _ref.current = inputNode
      }} 
      type="text" 
    />
  )
})

function App() {
  const ref = React.useRef(null)
  
  React.useEffect(() => {
    ref.current.focus()
    ref.current.compare(ref)
  })
  return (
    <MyInput 
      ref={x => {
        console.log(x)
        ref.current = x
      }}
    />
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
