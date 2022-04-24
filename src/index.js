import "./style/index.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createPortal } from "react-dom"

class Modal extends React.Component {
   constructor(props) {
     super(props)
     this.el = document.createElement("div")
     this.el.className = "modal-root"
   }

   componentDidUpdate() {
     if(this.props.show) {
      document.body.appendChild(this.el)
     }else {
      document.body.removeChild(this.el)
     }
   }

   render() {
     return createPortal(
      (
        <div className="modal-backdrop">
          <div className="modal-container">
              <div className="modal-title">
                {this.props.title}
              </div>
              <div className="modal-description">
                {this.props.description}
              </div>
              <div className="modal-control">
                <button onClick={this.props.onConfirm}>confirm</button>
              </div>
           </div>
        </div>
      ),
      this.el
     );
   }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalShow: false
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => console.log("test") || this.setState({ isModalShow: true })}>
          click me to show the modal
        </button>
        <Modal
          show={this.state.isModalShow}
          title={<div>this is modal title</div>}
          description={<div>this is modal description</div>}
          onConfirm={() => this.setState({ isModalShow: false })}
        />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
