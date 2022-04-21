import { Component } from "react"

export default class Input extends Component {
  onInput(e) {
    const value = e.target.value
    this.props.onInput(value)
  }

  render() {
    return <label htmlFor={this.props.name}>
      <input 
        name={this.props.name}
         type="text" 
         value={this.props.value} 
         onInput={this.onInput.bind(this)}
      />
    </label>
  }
}