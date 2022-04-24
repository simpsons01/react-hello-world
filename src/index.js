import React from 'react';
import ReactDOM from 'react-dom/client';

class Input extends React.Component {
   constructor(props) {
     super(props)
     this.inputRef = React.createRef()
   }

   componentDidMount() {
    this.inputRef.current.focus()
   }

   render() {
     return (
      <React.Fragment>
        <input ref={this.inputRef} type="text"></input>
      </React.Fragment>
     )
   }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Input />);
