import React from 'react';
import ReactDOM from 'react-dom/client';
import ListItem from "./components/ListItem"
import List from "./components/List"

const root = ReactDOM.createRoot(document.getElementById('root'));

class App extends React.Component {
  render() {
    return (
      <List 
       list={[
         { text: 'hello world' },
         { text: 'test' }
       ]}
      >
        {list => list.map(({ text }, index) => (
          <ListItem 
            key={index} 
            text={text} 
          />
        ))}
      </List>
    )
  }
}

root.render(<App />);
