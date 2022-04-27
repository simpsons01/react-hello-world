import React from 'react';
import ReactDOM from 'react-dom/client';

function wait () {
  let i = 0
  while(i < 10000000000) {
    i++
  }
}
// function Button() {
//   console.log("render")

//    React.useEffect(() => {
//     console.log('log from useEffect')
//    })

//    React.useLayoutEffect(() => {
//      console.log('log from useLayoutEffect')
//    })
   
//    return (
//      <button>click me</button>
//    )
// }

function NonBlockRenderButton() {
  const [state, setState] = React.useState("hello world")

  React.useEffect(() => {
    wait()
    setState('world hello')
  }, [])

  return (
    <button>{state}</button>
  )
}

function BlockRenderButton() {
   const [state, setState] = React.useState("hello world")

   React.useLayoutEffect(() => {
     wait()
     setState('world hello')
   }, [])

   return (
     <button>{state}</button>
   )
}


function App() {
  return (
    <React.Fragment>
      {/* <Button /> */}
      <NonBlockRenderButton />
      {/* <BlockRenderButton /> */}
    </React.Fragment>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
