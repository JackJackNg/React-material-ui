import React, { Component } from 'react'
import Button from 'material-ui/Button/Button';
import {
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.itemvalue,
      isDone: false,
      isHover: false,
      isEditing: false
    }

    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.editItem = this.editItem.bind(this)
    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
  }
  handleConfirm (e) {
    this.props.editItem(this.state.value, this.refs.input.value)
  }

  handleMouseEnter (e) {
    this.setState({ isHover: true })
  }

  handleMouseLeave (e) {
    this.setState({ isHover: false, isEditing: false })
  }

  handleEditClick (e) {
    this.setState({ isEditing: true })
    setTimeout(() => this.refs.input.select(), 100)
  }

  removeItem () {
    this.props.removeItem(this.state.value)
  }


  editItem () {
  }

  render () {
    return (
      <TableRow onMouseOver={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <TableRowColumn>
          {this.state.value}
        </TableRowColumn>
        <TableRowColumn>
          {this.state.isEditing && (<span><input ref="input" type="text" defaultValue={this.state.value} /><button onClick={this.handleConfirm}>confirm</button></span>)}
          {this.state.isHover && !this.state.isEditing && <span><button onClick={this.handleEditClick} className="button">Edit</button><button onClick={this.removeItem} className="button">Remove</button></span>}
        </TableRowColumn>
      </TableRow>
    )
  }
}

export default TodoItem