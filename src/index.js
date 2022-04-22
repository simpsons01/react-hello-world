import { Component } from 'react';
import ReactDOM from 'react-dom/client';
import MyErrorBoundary from './components/ErrorBoundary';

class HelloWorld extends Component {
  render() {
    if(this.props.flag) {
      throw new Error("error occur!")
    } 
    return <h1>hello world</h1> 
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: false
    }
  }
  
  componentDidMount() {
     setTimeout(() => {
       this.setState({ flag: true })
     }, 3000)
  }

  render() {
    return (
      <MyErrorBoundary>
         <HelloWorld flag={this.state.flag} />
      </MyErrorBoundary>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
