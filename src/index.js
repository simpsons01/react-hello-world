import React from 'react';
import ReactDOM from 'react-dom/client';

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  add() {
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.add.bind(this)}>+</button>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>hello world</h1>);
