import { Component } from "react"

const KEYCODE = {
  ENTER: 13
}

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      compositionStart: false
    }
  }

  onInput(e) {
    const value = e.target.value
    this.props.onInput(value)
  }

  onKeydown(e) {
    if(e.keyCode === KEYCODE.ENTER && !this.state.compositionStart) {
      this.props.onEnter()
    }
  }

  onCompositionStart() {
    console.log("composition start!")
    this.setState({ compositionStart: true  })
  }

  onCompositionEnd() {
    console.log("composition end!")
    this.setState({ compositionStart: false  })
  }

  render() {
    return <label htmlFor={this.props.name}>
      <input 
        name={this.props.name}
        type="text" 
        value={this.props.value} 
        onInput={this.onInput.bind(this)}
        onKeyDown={this.onKeydown.bind(this)}
        onCompositionStart={this.onCompositionStart.bind(this)}
        onCompositionEnd={this.onCompositionEnd.bind(this)}
      />
    </label>
  }
}