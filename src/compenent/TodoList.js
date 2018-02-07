import React from 'react'
import Form from './TodoForm'
import TodoDisplay from './TodoDisplay'
import AppBar from 'material-ui/AppBar'

export default class TodoList extends React.Component {
    constructor() {
        super()
        this.state = { todo: ['I am Jack'] }
        this.addToList = this.addToList.bind(this)
        this.removeFromList = this.removeFromList.bind(this)
        this.editItem = this.editItem.bind(this)
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
        /*
            1.  removeFromList & addToList
            2.  map((item)=>if(item==value){return value =update} item) 
        */
        console.log(origin, update);

        this.setState((prevState) => ({
            todo: prevState.todo.map((value) => { return (value === origin) ? update : value })
        }))
    }

    render () {
        return (<div >
            <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            <Form addItem={this.addToList} todo={this.state.todo} />
            <TodoDisplay editItem={this.editItem} removeItem={this.removeFromList} todo={this.state.todo} />

        </div>)
    }
}