import { Component } from "react"
import Input from "./Input"
import Checkbox from "./Checkbox"


export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: false,
      edit: ""
    }
  }

  setEdit(value) {
    this.setState(({ edit: value }))
  }

  startEdit() {
    this.setState({ isEdit: true, edit: this.props.todo.content })
  }

  endEdit() {
    this.setState({ isEdit: false, edit: "" })
  }

  submitEdit() {
    this.props.updateTodo({ ...this.props.todo, content: this.state.edit })
    this.endEdit()
  }

  toggleFinish(value) {
    this.props.updateTodo({ ...this.props.todo, done: value })
  }

  render() {
    const content = (
      this.state.isEdit ? 
        <Input
          value={this.state.isEdit ? this.state.edit : this.props.todo.content} 
          onInput={this.setEdit.bind(this)} 
          onEnter={() => this.submitEdit()}
        /> :
        <div className="content">{ this.props.todo.content }</div>
    )
    const button = (() => {
      const text = this.state.isEdit ? '送出' : '編輯'
      const onClick = () => this.state.isEdit ? this.submitEdit() : this.startEdit()
      return (
        <button 
          className="todo-control" 
          onClick={onClick}
        >
          {text}
        </button>
      )
    })()
    const cancelButton = (
       this.state.isEdit ? 
       <button 
        className="todo-control" 
        onClick={this.endEdit.bind(this)}
       >
        取消
       </button> : 
       null
    )
    return (
      <div className={this.props.todo.done ? "todo done" : "todo" }>
        <Checkbox 
          className="todo-checkbox" 
          checked={this.props.todo.done} 
          onChange={this.toggleFinish.bind(this)} 
        />
        {content}
        {button}
        {cancelButton}
        <button 
          className="todo-control" 
          onClick={() => this.props.deleteTodo(this.props.todo.id)}
        >
          刪除
        </button> 
      </div>
    )
  }
}