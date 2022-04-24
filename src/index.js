import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types'

class HelloWorld extends React.Component {
   render() {
     return (
        <div>
          { this.props.head(this.props.text) }
        </div>
     );
   }
}

HelloWorld.propTypes = {
  text: PropTypes.string,
  head: PropTypes.func
}

class Heading extends React.Component {
  render() {
    return (
      <h1>{ this.props.title }</h1>
    )
  }
}


class App extends React.Component {
   render() {
     return (
       <HelloWorld
         text={'1'}
         head={text => <Heading title={text} />}
       />
     )
   }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>hello world</h1>);
