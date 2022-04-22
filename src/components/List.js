import { Component } from "react"

export default class List extends Component {
   render() {
     return (
       <ul>
         {this.props.children(this.props.list)}
       </ul>
     )
   }
}