import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import {
  Table,
  TableBody
} from 'material-ui/Table'

class TodoDisplay extends Component { 
  render () {
    return (
      <Table  >
        <TableBody>
          {this.props.todo.map((e) => (<TodoItem editItem={this.props.editItem} removeItem={this.props.removeItem} itemvalue={e} key={e} />))} 
        </TableBody>
      </Table>
    )
  }
}

TodoDisplay.propTypes = {
  todo : PropTypes.array,
  removeItem : PropTypes.func,
  editItem : PropTypes.func
}

export default TodoDisplay