import React from 'react'
import Form from './TodoForm'
import TodoDisplay from './TodoDisplay'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Button from 'material-ui/Button/Button';
import AppBar from 'material-ui/AppBar/AppBar';

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
        console.log(origin, update);

        this.setState((prevState) => ({
            todo: prevState.todo.map((value) => { return (value === origin) ? update : value })
        }))
    }

    render () {
        return (
            <MuiThemeProvider  theme={getMuiTheme(darkBaseTheme)}>
                <AppBar title="My React To do List" /> 
                <Form addItem={this.addToList} todo={this.state.todo} />
                <TodoDisplay editItem={this.editItem} removeItem={this.removeFromList} todo={this.state.todo} />
            </MuiThemeProvider>
        )
    }
}