import React from 'react';
import ReactDOM from 'react-dom/client';

const theme = {
  value: 'light'
}

window.theme = theme

const ThemeContext = React.createContext(theme)

class Layout extends React.Component {
  static contextType = ThemeContext
  render() {
    return this.context.value === "light" ? <div>{"light-theme"}</div> : <div>{"dark-theme"}</div>
  }
}

class LayoutB extends React.Component {
  static contextType = ThemeContext
  render() {
    return this.context.value === "light" ? <div>{"light-theme"}</div> : <div>{"dark-theme"}</div>
  }
}
class App extends React.Component {
  
  constructor(props) {
     super(props)
     this.state = {
       theme: {
         value: ''
       }
     }
     this.toggleTheme = this.toggleTheme.bind(this)
  }

  toggleTheme() {
    this.setState(prevState => {
      return (
        prevState.theme.value === 'light' ? 
         { theme: { value: 'dark' } } : 
         { theme: { value: 'light' } }
      )
    })
  }

  render() {
    return (
      <React.StrictMode>
          <button onClick={this.toggleTheme}>
            toggle theme
          </button>
          <ThemeContext.Provider value={this.state.theme}>
              <Layout />
              <LayoutB />
          </ThemeContext.Provider>

      </React.StrictMode>
    )    
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
