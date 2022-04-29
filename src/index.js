import React from 'react';
import ReactDOM from 'react-dom/client';


window.list = []


function CountView(props) {

  console.log("counteView rerender")

  const { count1, count2 } = props

  const count1Ref = React.useRef(count1)
  const count2Ref = React.useRef(count2)

  React.useEffect(() => {
    if(count1Ref.current !== count1) {
      console.log('count1 add!')
      count1Ref.current = count1
    }
    if(count2Ref.current !== count2) {
      console.log('count2 add!')
      count2Ref.current = count2
    }
  })

  const calcCount2Double = React.useMemo(() => {
    return () => count2 * 2
  }, [count2])

  window.list.push(calcCount2Double)

  
  return (
    <div>
      <div>
        <p>count1</p>
        <div>{count1}</div>
      </div>
      <div>
        <p>count2</p>
        <div>{count2}</div>
      </div>
    </div>
  )
}

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count1: 0,
      count2: 0
    }
  }

  addCounter1() {
    this.setState(prevState => ({ count1: prevState.count1 + 1 }))
  }

  addCounter2() {
    this.setState(prevState => ({ count2: prevState.count2 + 1 }))
  }

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.addCounter1.bind(this)}>add count1</button>
        <button onClick={this.addCounter2.bind(this)}>add count2</button>
        <CountView 
          count1={this.state.count1}
          count2={this.state.count2}
        />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);
