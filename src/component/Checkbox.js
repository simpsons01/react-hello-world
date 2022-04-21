import { Component } from "react"

export default class Checkbox extends Component {
  onChange() {
    this.props.onChange(!this.props.checked)
  }

  render() {
    return <label htmlFor={this.props.name}>
      <input 
        type="checkbox"
        name={this.props.name}
        checked={this.props.checked} 
        onChange={this.onChange.bind(this)}
      />
    </label>
  }
}