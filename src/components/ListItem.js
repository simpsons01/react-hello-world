import { Component } from "react"

export default class ListItem extends Component {
   render() {
     return (
      <li>
        {this.props.text}
      </li>
     )
   }
}