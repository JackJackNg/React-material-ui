import React, { Component } from 'react'
import './App.css'
import TodoList from './compenent/TodoList'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar/AppBar'

class App extends Component {
  render () {
    return (
      <div>
        <MuiThemeProvider theme={getMuiTheme(darkBaseTheme)}>
          <div>
            <AppBar title="My React To do List" />
            <TodoList />
          </div>
        </MuiThemeProvider >
      </div>
    )
  }
}

export default App
