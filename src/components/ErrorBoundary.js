import { Component } from "react"

export default class MyErrorBoundary extends Component {
   constructor(props) {
     super(props)
     this.state = {
       error: false,
       errorInfo: ''
     }
   }

   componentDidCatch(error, errorInfo) {
     console.log(error)
     console.log(errorInfo)
     this.setState({ error: true, errorInfo })
   }

   render() {
     if(this.state.error) {
      return <h1>error occured</h1>
     }else {
      return this.props.children
     }
   }
}