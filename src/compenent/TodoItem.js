import React, { Component } from 'react'
import { TableRow, TableRowColumn } from 'material-ui/Table'
import PropTypes from 'prop-types'

// Start of class
class TodoItem extends Component {

  // start constructor
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.itemvalue,
      input: null,
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

  } // end of constructor 

  // start of render
  render () {
    return (
      <TableRow onMouseOver={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <TableRowColumn>
          {this.state.value}
        </TableRowColumn>
        <TableRowColumn>
          {
            this.state.isEditing &&
            (<span>
              <input ref={(ref) => { this.input = ref }} type="text" defaultValue={this.state.value} />
              <button onClick={this.handleConfirm}>confirm</button>
            </span>)
          }
          {
            this.state.isHover &&
            !this.state.isEditing &&
            (<span>
              <button onClick={this.handleEditClick} className="button">Edit</button>
              <button onClick={this.removeItem} className="button">Remove</button>
            </span>)
          }
        </TableRowColumn>
      </TableRow>
    )
  } //end of render

  handleConfirm () {
    this.props.editItem(this.state.value, this.input.value)
  }

  handleMouseEnter () {
    this.setState({ isHover: true })
  }

  handleMouseLeave () {
    this.setState({ isHover: false, isEditing: false })
  }

  handleEditClick () {
    this.setState({ isEditing: true })
    setTimeout(() => this.input.select(), 100)
  }

  removeItem () {
    this.props.removeItem(this.state.value)
  }

  editItem () {
  }

} // End of class

TodoItem.propTypes = {
  removeItem: PropTypes.func,
  editItem: PropTypes.func,
  itemvalue: PropTypes.string,
}

export default TodoItem