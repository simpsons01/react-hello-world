import "./style/index.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import Todo from "../src/component/Todo"
import Input from "./component/Input";
import Radio from "./component/Radio";

const FILTER_TODO = {
  DONE: 0,
  UNDONE: 1,
  ALL: 2
}

const FILTER_RADIO_GROUP = [
  { label: 'done', value: FILTER_TODO.DONE },
  { label: 'undone', value: FILTER_TODO.UNDONE },
  { label: 'all', value: FILTER_TODO.ALL },
]

let uid = 0

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputTodo: "",
      filter: FILTER_TODO.ALL,
      todos: [
        { id: uid, content: '7:20到垃圾', done: false }
      ]
    }
  }

  onSubmit() {
    this.addTodo(this.state.inputTodo)
    this.setState({ inputTodo: "" })
  }

  addTodo(todo) {
    uid += 1
    this.setState(prevState => ({
      todos: [...prevState.todos, { id: uid, content: todo, done: false}]
    })) 
  }

  updateTodo(updateTodo) {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if(todo.id === updateTodo.id) {
          return updateTodo
        }else {
          return todo
        }
      })
    }))
  }

  deleteTodo(id) {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }))
  }
  
  render() {
   const todos = this.state.todos
     .filter(todo => {
       if(this.state.filter === FILTER_TODO.ALL) {
         return true
       }else if(this.state.filter === FILTER_TODO.DONE) {
         return todo.done
       }else if(this.state.filter === FILTER_TODO.UNDONE) {
         return !todo.done
       }else {
         return true
       }
     })
     .map(todo => (
      <Todo 
        key={todo.id} 
        todo={todo} 
        updateTodo={this.updateTodo.bind(this)} 
      />
    )
   )
   const filterRadio = FILTER_RADIO_GROUP.map(({ label, value }, index) => {
     return (
       <Radio
         key={index}
         value={value}
         name={'filter'}
         id={label}
         bindValue={this.state.filter}
         onChange={value => this.setState({ filter: value })}
       />
     )
   })
    return (
      <div className="app">
        <div className="todo-input">
          <Input 
            value={this.state.inputTodo} 
            onInput={value => this.setState({ inputTodo: value })} 
          />
          <button onClick={this.onSubmit.bind(this)}>送出</button>
        </div>
        <div>篩選: {filterRadio}  </div>
        <div className="todo-container">
          {todos}
        </div>
      </div>
    ) 
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
