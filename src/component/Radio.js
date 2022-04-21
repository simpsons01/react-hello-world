import { Component } from "react"

export default class Radio extends Component {
  onChange() {
    this.props.onChange(this.props.value)
  }

  render() {
    return <label htmlFor={this.props.id}>
      <input 
        type="radio"
        name={this.props.name}
        id={this.props.id}
        checked={this.props.value === this.props.bindValue} 
        value={this.props.value}
        onChange={this.onChange.bind(this)}
      />
      <span>{this.props.id}</span>
    </label>
  }
}