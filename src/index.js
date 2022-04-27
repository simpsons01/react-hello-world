import React from 'react';
import ReactDOM from 'react-dom/client';

function Button() {
  console.log("render")
  
   React.useEffect(() => {
    console.log('log from useEffect')
   })

   React.useLayoutEffect(() => {
     console.log('log from useLayoutEffect')
   })
   
   return (
     <button>click me</button>
   )
}


function App() {
  return (
    <Button />
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
