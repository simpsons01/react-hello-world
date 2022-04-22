import React from 'react';
import ReactDOM from 'react-dom/client';
import Tab from "./component/Tab"

const root = ReactDOM.createRoot(document.getElementById('root'));
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: ''
    }
    this.updateTab = this.updateTab.bind(this)
  }

  updateTab(newTab) {
    React.startTransition(() => {
      this.setState({ tab: newTab })
    })
  }

  render() {
    return (
      <Tab  
        tab={this.state.tab}
        onTabClick={this.updateTab}
      />
    )
  }
}
root.render(<App />);
