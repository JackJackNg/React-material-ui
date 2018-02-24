import React from 'react'
import TodoForm from './TodoForm'
import TodoDisplay from './TodoDisplay'

class TodoList extends React.Component {
  constructor() {
    super()
    this.state = {
      todo: ['I am Jack']
    }
    this.addToList = this.addToList.bind(this)
    this.removeFromList = this.removeFromList.bind(this)
    this.editItem = this.editItem.bind(this)
  }

  render () {
    return (
      <div>
        <TodoForm addItem={this.addToList} todo={this.state.todo} />
        <TodoDisplay editItem={this.editItem} removeItem={this.removeFromList} todo={this.state.todo} />
      </div>
    )
  }

  addToList (value) {
    this.setState(prevState => ({
      todo: [...prevState.todo, value]
    }))
  }

  removeFromList (value) {
    this.setState((prevState) => ({
      todo: prevState.todo.filter(item => item !== value)
    }))
  }

  editItem (origin, update) {
    this.setState((prevState) => ({
      todo: prevState.todo.map((value) => {
        return (value === origin) ? update : value
      })
    }))
  }

}

export default TodoList