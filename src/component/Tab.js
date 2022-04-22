import { Component, lazy } from "react"

const Bar = lazy(() => import("./Bar.js")) 
const Foo = lazy(() => import("./Foo.js")) 

export class Tab extends Component {
  render() {
     return (
        <div class="tab">
           <div class="tab-control">
             <button onClick={() => this.props.onTabClick('Bar')}>bar</button>
             <button onClick={() => this.props.onTabClick('Foo')}>foo</button>
           </div>
           <div class="tab-content">
             { this.props.tab === 'Foo' ? <Foo /> : <Bar /> }
           </div>
        </div>
     )
  }
}