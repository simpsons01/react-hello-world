import React from 'react';
import ReactDOM from 'react-dom/client';

class Counter extends React.Component {
  
  componentDidUpdate() {
    console.log("componnet did update")
  }

  render() {
    console.log("componet did render")
    return (
      <div>
        {this.props.count}
      </div>
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState((prevState) => ({ count: prevState.count + 1 }))}>+</button>
        <Counter 
           count={this.state.count}
        />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
