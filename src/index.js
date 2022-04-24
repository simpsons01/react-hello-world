import React from 'react';
import ReactDOM from 'react-dom/client';

class HelloWorld extends React.Component {
  componentDidMount() {
    console.log("component mount!")
  }

  componentWillUnmount() {
    console.log("component unmount!")
  }

  render() {
    return <div>hello world</div>
  }
}

class Wrapper extends React.Component {
  render() {
    const el = (
      this.props.el === "button" ? 
       <button>{this.props.children}</button> : 
       <div>{this.props.children}</div>
    )
    return el
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      renderEl: 'button'
    }
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ renderEl: 'button' })}>render button</button>
        <button onClick={() => this.setState({ renderEl: 'div' })}>render div</button>
        <div>
          <Wrapper el={this.state.renderEl}>
           <HelloWorld el={this.state.renderEl} />
          </Wrapper>
        </div>
      </React.Fragment>      
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
