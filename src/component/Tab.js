import { Component, lazy } from "react"

const Bar = lazy(() => import(/* webpackChunkName: "Bar" */ "./Bar.js")) 
const Foo = lazy(() => import(/* webpackChunkName: "Foo" */ "./Foo.js")) 

export default class Tab extends Component {
  render() {
     return (
        <div className="tab">
           <div className="tab-control">
             <button onClick={() => this.props.onTabClick('Bar')}>bar</button>
             <button onClick={() => this.props.onTabClick('Foo')}>foo</button>
           </div>
           <div className="tab-content">             
              { this.props.tab === 'Foo' ? <Foo /> : <Bar /> } 
           </div>
        </div>
     )
  }
}